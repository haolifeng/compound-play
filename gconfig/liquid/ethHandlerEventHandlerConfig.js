const EventHandler = require('../../liquid/agents/eth/eventHandler/index');
let config ={
    component:EventHandler,
    config:{
        events:[
            'MarketListed',
            'MarketEntered',
            'MarketExited',
            'Borrow',
            'RepayBorrow',
            'Transfer'
        ],
        interval:3000,

    }
}
module.exports = config;