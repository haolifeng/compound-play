const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
*MarketListed,
* MarketEntered,
* MarketExited,
* Borrow,
* RepayBorrow,
* Transfer
* */
const eventSchema = new Schema(
    {
        event:{
            type:String,
        },
        transactionIndex:{
            type:Number,
        },
        transactionHash:{
            type:String,
        },
        blockHash:{
            type:String,
        },
        blockNumber: {
            type: Number
        },
        timestamp: {
            type: Number,
            default: 0
        },
        MarketListedEvent:{
            type: Array,
            default: []
        },
        MarketEnteredEvent:{
            type: Array,
            default: []
        },
        MarketExitedEvent:{
            type: Array,
            default: []
        },
        BorrowEvent:{
            type: Array,
            default: []
        },
        RepayBorrowEvent:{
            type: Array,
            default: []
        },
        TransferEvent:{
            type: Array,
            default: []
        },
        status:{
            stype:String,
            default:'init', // init, processing, finish
        }
    },
    {
        collection: 'event'
    });

module.exports = eventSchema;