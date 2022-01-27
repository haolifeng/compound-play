const registry = require('../registry');
class BaseHandler {
    constructor(handlerName,agentName, chainName,chainType){
        this.handlerName = handlerName;
        this.agentName = agentName;
        this.chainName = chainName;
        this.chainType = chainType;
        this.logger = registry.getLogger();
        this.storeage = registry.getStorage();
    }
    async init(){

    }
    async run(){

    }

}

module.exports = BaseHandler;