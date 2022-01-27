class Registry {
    constructor(){
        this.chainMap = new Map();
        this.agentMap = new Map();
        this.handlerMap = new Map();
    }
    setSysConfig(config){
        this.sysConfig = config;
    }
    getSysConfig(){
        return this.sysConfig;
    }
    setLogger(logger){
        this.logger = logger;
    }
    getLogger(){
        return this.logger;
    }
    setStorage(storage){
        this.storage = storage;
    }
    getStorage(){
        return this.storage;
    }
    getLiquidConfig(){
        return this.sysConfig.liquidConfig;
    }
    setChain(chainName, chain){
        this.chainMap.set(chainName,chain);
    }
    getChain(chainName){
        return this.chainMap.get(chainName);
    }
    setAgent(agentName, agent){
        this.agentMap.set(agentName,agent);
    }
    getAgent(agentName){
        return this.agentMap.get(agentName);
    }
    setHandler(handlerName, handler){
        this.handlerMap.set(handlerName,handler);
    }
    getHandler(handlerName){
        return this.handlerMap.get(handlerName);
    }
}

let registry = new Registry();

module.exports = registry;
