const BaseStatus = require('./BaseStatus');

class AccountStatus extends BaseStatus {
    constructor(accountAddress, chainAccess, storage){
        super(accountAddress.toLowerCase(), chainAccess,storage);
        this.type="Account";

        this.properties.address = accountAddress.toLowerCase();
        this.properties.health = "0";

        this.properties.net_asset_value = "0";
        this.properties.tokens = [];
        this.properties.total_borrow_value = "0";
        this.properties.total_collateral_value = "0";
        this.properties.timestamp = "0";
        this.accountTokenInstance = [];
        this.properties.comp_reward = "0";
        this.properties.rewardAddress = "";
        this.properties.rewardBalances = '0';


    }
}

module.exports = AccountStatus;