class BaseStatus {
    constructor(id, chainAccess, storage){
        this.id = id;
        this.type  = "Status";
        this.chainAccess = chainAccess;
        this.storage = storage;
        this.properties = {};
        this._currentBlockNumber_ = 0;
    }

}

module.exports = BaseStatus;