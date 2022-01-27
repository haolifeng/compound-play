let sysConfig = require('../sysConfig');
let ethChain = require('../../liquid/chains/EthChain');
let config ={
    chainType:'ETH',
    component:ethChain,
    config:{
        nodeUrl:sysConfig.nodeUrl,
    }

};

module.exports = config;