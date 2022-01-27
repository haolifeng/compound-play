const ethAgent = require('../../liquid/agents/eth/EthAgent');
const chainSync = require('./ethHandlerChainSyncConfig');
const eventHandler = require('./ethHandlerEventHandlerConfig');
let config ={
    chainType:'ETH',
    chainName:'ETH',
    component:ethAgent,
    config:{},
    handlers:{
        chainSync:chainSync,
        eventHandler:eventHandler
    }

}

module.exports = config;