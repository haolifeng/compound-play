let sysConfig = require('../sysConfig');
let ethChainConfig = require('./ethChainConfig');
let ethAgentConfig = require('./ethAgentConfig');
let config ={
    storage:{
        dbUrl:'mongodb://192.168.1.107:27017/liquid',
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