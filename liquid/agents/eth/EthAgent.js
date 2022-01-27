const BaseAgent = require('../BaseAgent');
let registry = require('../../registry');
class EthAgent extends BaseAgent {
    constructor(agentName, chainName,chainType){
        super(agentName, chainName,chainType);
        this.handlersConfig = registry.getLiquidConfig().agents[agentName].handlers;

        for(let handlerName in this.handlersConfig){
            let handlerConfig = this.handlersConfig[handlerName];
            let handlerInst = new handlerConfig.component(handlerName, this.agentName,this.chainName,this.chainType);
            let handlerKey = this.agentName  + handlerName;
            registry.setHandler(handlerKey,handlerInst);
        }
    }
    async init(){
        for(let handlerName in this.handlersConfig){
            let handlerKey = this.agentName + handlerName;
            await registry.handlerMap.get(handlerKey).init();
        }

    }
    async run(){
        for(let handlerName in this.handlersConfig){
            let handlerKey = this.agentName + handlerName;
            registry.handlerMap.get(handlerKey).run();
        }
    }

}

module.exports = EthAgent;