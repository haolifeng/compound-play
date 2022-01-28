const syncInfoSchema = require('./models/syncedInfoSchema');
const eventSchema = require('./models/eventSchema');
const DBAccess = require('./dbAccess');
const registry = require('../registry');
const dbConfig = registry.getLiquidConfig().storage;

class Storage {
    constructor(chainDB){
        this.db = chainDB;
        this.syncedInfoModel = this.db.model(dbConfig.chainSyncedInfo,syncInfoSchema);
        this.eventModel = this.db.model(dbConfig.event, eventSchema);
        this.dbAccess = new DBAccess();

    }

    async saveScannedBlockNumber(chainType, number){
        let ret = await this.dbAccess.syncUpdateDocument(this.syncedInfoModel,{
            chainType:chainType
        },{
            chainType: chainType, scannedBlockNumber: number
        })
        return ret;

    }
    async getEvents(status){
        let ret = await this.dbAccess.syncFindDocument(this.eventModel,{status:status});
        return ret;
    }
    async getSyncBlockNumber(chainType){
        let ret = await this.dbAccess.syncFindDocument(this.syncedInfoModel,{chainType:chainType});
        return ret;
    }
    /*
     *MarketListed,
* MarketEntered,
* MarketExited,
* Borrow,
* RepayBorrow,
* Transfer
*  {
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
    },
*
    * */
    async saveEvent(eventItem){
        let event = eventItem.event;
        switch (event) {
            case 'MarketListed':
                let doc = {
                    event:event,
                    transactionIndex:eventItem.transactionIndex,
                    transactionHash:eventItem.transactionHash,
                    blockHash:eventItem.blockHash,
                    blockNumber:eventItem.blockNumber,
                    timestamp:new Date().getTime(),
                    MarketListedEvent:[eventItem.returnValues]
                }
                this.dbAccess.addDocument(this.eventModel,doc);
                break;
            case 'MarketEntered':
                break;
            case 'MarketExited':
                break;
            case 'Borrow':
                break;
            case 'RepayBorrow':
                break;
            case 'Transfer':
                break;


            default:
                break;

        }

    }


}

module.exports = Storage;