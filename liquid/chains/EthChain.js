const BaseChain = require('./BaseChain');
let registry = require('../registry');
let {Web3Http, Web3OffChain, Wer3OnChain} = require('../../hdevframe/web3Lib');

class EthChain extends BaseChain {
    constructor(chainName,chainType){
        super(chainName,chainType);
    }
    async init(){
        this.config = registry.getLiquidConfig().chains[this.chainName].config;
        this.web3Http = new Web3Http(this.config.nodeUrl);
        this.web3 = this.web3Http.getWeb3();
        this.web3OffChain = new Web3OffChain(this.web3);
        this.web3OnChain = new Web3OnChain(this.web3);
    }
    async getlatestBlockNumber(){
        let latestBlockNumber = await this.web3OnChain.getBlockNumber();
        return latestBlockNumber;
    }

}
module.exports = EthChain;
