let constConfig = require('../constConfig');
let ethChainConfig = require('./ethChainConfig');
let ethAgentConfig = require('./ethAgentConfig');
let config ={
    storage:{
        dbUrl:constConfig.dbUrl,
        promiseTimeout: 300 * 1000,
        chainSyncedInfo:'chainSyncedInfo',
        event:'event'
    },
    log:{
        loglevel:'debug',
        logfile:'log/crossSystem.log',
        logErrorFile:'log/crossSystem_error.log',
    },
    chains:{
        ETH:ethChainConfig,
    },
    agents:{
        ETH:ethAgentConfig,
    }
}
module.exports = config;