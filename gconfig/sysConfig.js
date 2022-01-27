const abiPathConfig = require('./abiPathConfig');
const underlyingConfig = require('./underlyingConfig');
const scAddrConfig = require('./scAddrConfig');
let config = {
    nodeUrl:'http://127.0.0.1:8545',
    abiPathConfig:abiPathConfig,
    underlyingConfig:underlyingConfig,
    scAddrConfig:scAddrConfig,
    scAddrFilePath:__dirname + '/scAddrConfig.json',

}

module.exports = config;