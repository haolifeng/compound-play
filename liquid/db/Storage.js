const syncInfoSchema = require('./models/syncedInfoSchema');
const eventSchema = require('./models/eventSchema');
const DBAccess = require('./dbAccess');
const registry = require('../registry');
const dbConfig = registry.getLiquidConfig().storage;
const mongoose = require('mongoose');
class Storage {
    constructor(chainDB){
        this.db = chainDB;
        this.syncedInfoModel = this.db.model(dbConfig.ChainSyncedInfo,syncInfoSchema);
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
    * */
    async saveEvent(eventItem){
        let event = eventItem.event;
        switch (event) {
            case 'MarketListed':

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