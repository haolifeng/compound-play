const abiPathConfig = require('./abiPathConfig');
const underlyingConfig = require('./underlyingConfig');
const scAddrConfig = require('./scAddrConfig');
const liquidConfig = require('./liquid/config');
let config = {
    nodeUrl:'http://127.0.0.1:8545',
    abiPathConfig:abiPathConfig,
    underlyingConfig:underlyingConfig,
    scAddrConfig:scAddrConfig,
    scAddrFilePath:__dirname + '/scAddrConfig.json',
    liquidConfig:liquidConfig,

}

module.exports = config;