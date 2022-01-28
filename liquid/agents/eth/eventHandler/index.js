const BaseHandler = require('../../BaseHandler');
const registry = require('../../../registry');
let { sleep } = require('../../../utils/lib');
class EventHandler extends BaseHandler{
    constructor(handlerName,agentName, chainName,chainType){
        super(handlerName,agentName,chainName,chainType);
        this.storage = registry.getStorage();
        this.config = registry.getLiquidConfig().agents[this.agentName].handlers[this.handlerName].config;
    }
    async init(){
        this.logger.debug('in event handler --- init');


    }
    async run(){
        while(1){
            let docs = await this.storage.getEvents('init');
            if(docs && docs.length !== 0){
                for(let doc of docs){
                    let event = doc.event;
                    switch(event){
                        case 'MarketListed':
                            this.marketListedHandler(doc);
                            break;
                        case 'MarketEntered':
                            break;
                        case    'MarketExited':
                            break;
                        case   'Borrow':
                            break;
                        case   'RepayBorrow':
                            break;
                        case   'Transfer':
                            break;
                        default:
                            break;
                    }
                }
            }
            await sleep(this.config.interval);

        }

    }
    async marketListedHandler(doc){
        this.logger.debug('maketListedHandler --- doc: ',doc);
    }

}

module.exports = EventHandler;