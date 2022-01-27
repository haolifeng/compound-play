let chainSyncComponet = require('../../liquid/agents/eth/chainSync/index');
let scAddrConfig = require('../scAddrConfig');
let apiPathConfig = require('../abiPathConfig');
let config ={
    component:chainSyncComponet,
    config:{
        contracts:{
            comptroller:{
                scAddr:scAddrConfig.Unitroller,  //here use unitroller's address
                abi:require(apiPathConfig.Comptroller.abifile),
                events:[
                    'MarketListed','MarketExited',
                ]
            },
            CEther:{
                scAddr:scAddrConfig.CEther,
                abi:require(apiPathConfig.CEther.abifile),
                events:[]
            },
            TRedCoin:{
                scAddr:scAddrConfig.TRed,
                abi:require(apiPathConfig.CErc20Immutable.abifile),
                events:[]
            },
            THaoCoin: {
                scAddr:scAddrConfig.THAO,
                abi:require(apiPathConfig.CErc20Immutable.abifile),
                events:[]
            }

        },
        softBlock:3,
        stepBlock:100,
        syncInterval:3000, //1 second
        startBlock:500,

    }
}
module.exports = config;