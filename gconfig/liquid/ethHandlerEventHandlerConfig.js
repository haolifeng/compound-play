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
        ]

    }
}
module.exports = config;