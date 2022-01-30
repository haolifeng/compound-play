const BaseStatus = require('./BaseStatus');

class AccountStatus extends BaseStatus {
    constructor(id, chainAccess, storage){
        super(id, chainAccess,storage);

    }
}

module.exports = AccountStatus;