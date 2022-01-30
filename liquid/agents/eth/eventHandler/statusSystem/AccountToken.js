const BaseStatus = require('./BaseStatus');

class AccountToken extends BaseStatus {
    constructor(id, chainAccess, storage){
        super(id, chainAccess,storage);

    }
}

module.exports = AccountToken;