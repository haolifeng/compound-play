const registry = require('../registry')
class BaseAgent {
    constructor(agentName, chainName,chainType){
        this.agentName = agentName;
        this.chainName = chainName;
        this.chainType = chainType;

        this.logger = registry.getLogger();
        this.storage = registry.getStorage();

    }
    async init(){

    }
    async run(){

    }
}

module.exports = BaseAgent;