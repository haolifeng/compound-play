let registry = require('./registry');
class App {
    constructor(){
        let chainsConfig = registry.getLiquidConfig().chains;
        for(let chainName in chainsConfig){
            let chainConfig = chainsConfig[chainName];
            let chainInst = new chainConfig.component(chainName,chainConfig.chainType);
            registry.setChain(chainName,chainInst);
        }

        let agentsConfig =registry.getLiquidConfig().agents;

        for(let agentName in agentsConfig){
            let agentConfig = agentsConfig[agentName];
            let agentInst = new agentConfig.component(agentName,agentConfig.chainName,agentConfig.chainType);
            registry.setAgent(agentName,agentInst);
        }

    }
    async init(){
        for(let [chainName, chain] of registry.chainMap){
            await chain.init();
        }
        for(let [agentName, agent] of registry.agentMap){
            await agent.init();
        }

    }
    async run(){
        for(let [agentName, agent] of registry.agentMap){
            await agent.run();
        }
    }
}

module.exports = App;