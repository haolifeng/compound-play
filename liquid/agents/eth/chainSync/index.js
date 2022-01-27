const BaseHandler = require('../../BaseHandler');
let registry = require('../../../registry');

let { sleep } = require('../../../utils/lib');
let { Web3ContractOnChain } = require('../../../../hdevframe/web3Lib');

class ChainSync extends BaseHandler{
    constructor(handlerName,agentName, chainName,chainType){
        super(handlerName,agentName,chainName,chainType);
        this.contractContentMap = new Map();
        this.storeage = registry.getStorage();
    }
    async init(){
        this.config = registry.getLiquidConfig().agents[this.agentName].handlers[this.name].config;
        this.softBlock = this.config.softBlock;
        this.syncInterval = this.config.syncInterval;
        this.stepBlock = this.config.stepBlock;

        this.chain = registry.getChain(this.chainName);
        let contractsConfig = this.config.contracts;
        for(let contractName in contractsConfig){
            let contractConfig = contractsConfig[contractName];
            let web3ContractIsc = new Web3ContractOnChain(this.chain.web3, contractConfig.abi, contractConfig.scAddr);
            let contractContent = {
                inst: web3ContractIsc,
                events: contractConfig.events
            }
            this.contractContentMap.set(contractName, contractContent);
        }
    }

    async syncEvent(from, to){
        this.logger.debug(`from:${from} -- to:${to}`);
        for(let [contractName, contractContent] of this.contractContentMap){
            let inst = contractContent.inst;
            let events = contractContent.events;

            let allEventsArray = await inst.getPastEvents('allEvents',from,to);
            this.logger.debug('allEventsArray: ', allEventsArray);
            let filterEvents = allEventsArray.filter((item, index, allEventsArray)=>{
                return events.indexOf(item.event) >=0;
            });

            let ret  = filterEvents.sort((a,b)=>{   //sort
                if(a.blockNumber!==b.blockNumber) return a.blockNumber - b.blockNumber;
                else return a.transactionIndex - b.transactionIndex;
            })
            for(let eventItem of ret){
                await this.storage.saveEvent(eventItem);
            }



        }


    }
    async run(){
        while(1){
            this.logger.debug('in chain Sync');
            await this.scEventScan();
        }

    }
    async scEventScan(){
        try{
            let beginBlockNumber = await this.getSyncBlockNumber();
            this.logger.debug('beginBlockNumber: ', beginBlockNumber);
            let lastestBlockNumber = await this.chain.getlatestBlockNumber();
            this.logger.debug('lastestBlockNumber: ', lastestBlockNumber)
            if(beginBlockNumber >= (lastestBlockNumber - this.softBlock)){
                await sleep(this.syncInterval);
                return;
            }
            let toBlockNumber = beginBlockNumber + this.stepBlock;
            this.logger.debug('toBlockNumber: ', toBlockNumber);
            if(toBlockNumber >= (lastestBlockNumber - this.softBlock)){
                toBlockNumber = lastestBlockNumber - this.softBlock;
            }
            this.logger.debug(`beginBlockNumber:${beginBlockNumber + 1} - toBlockNumber: ${toBlockNumber}`);
            await this.syncEvent(beginBlockNumber + 1, toBlockNumber);
            await this.updateSyncBlockNumber(toBlockNumber);
            if(lastestBlockNumber > (toBlockNumber + this.softBlock)){
                return;
            }
            await sleep(this.syncInterval);
        }catch (e) {
            this.logger.warn('scEventScan: e', e);
        }
    }

    async updateSyncBlockNumber(to){
        await this.storeage.saveScannedBlockNumber(this.chainType, to);
    }
    async getSyncBlockNumber(){
        let ret = await this.storage.getSyncBlockNumber(this.chainType);
        this.logger.debug('getSysBlockNumber : ', ret);
        if(ret && ret.length !== 0){
            let r = ret[0];
            return r.scannedBlockNumber;
        }else{
            return this.config.startBlock;
        }

    }

}

module.exports = ChainSync;