const BaseStatus = require('./BaseStatus');

class StatusSystem extends BaseStatus {
    constructor(chainAccess, storage){
        super('StatusSystem', chainAccess, storage);
        this.type = 'StatusSystem';

        this.properties.markets = [];
        this.properties.accounts = [];
    }
}

module.exports = StatusSystem;
