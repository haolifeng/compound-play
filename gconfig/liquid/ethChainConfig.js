let constConfig = require('../constConfig');
let ethChain = require('../../liquid/chains/EthChain');
console.log('sysConfig.nodeUrl', constConfig.nodeUrl);
let config ={
    chainType:'ETH',
    component:ethChain,
    config:{
        nodeUrl:constConfig.nodeUrl,
    }

};

module.exports = config;