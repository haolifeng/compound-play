const BaseStatus = require('./BaseStatus');

class AccountToken extends BaseStatus {
    constructor(accountAddress,marketAddress, chainAccess, storage){
        super(accountAddress.toLowerCase() + '-' + marketAddress.toLowerCase().slice(2), chainAccess,storage);
        this.type='AccountToken';

        this.properties.account_address = accountAddress.toLowerCase();
        this.properties.token_address = marketAddress.toLowerCase();
        this.properties.is_entered = false;

        this.properties.account_total_borrow = "0";
        this.properties.account_total_repay = '0';
        this.properties.account_total_supply = '0';
        this.properties.account_total_redeem = '0';
        this.properties.account_total_liquidated = '0';
        this.properties.account_total_liquidate = "";

        this.properties.lifetime_borrow_interest_accrued = '0';
        this.properties.lifetime_supply_interest_accrued = '0';

        this.properties.suppply_balance = "0";
        this.properties.borrow_balance_underlying = "0";
        this.properties.supply_balance_underlying = "0";
        this.properties.timepstamp = "0";
        this.market = undefined;
        this.account = undefined;

    }
}

module.exports = AccountToken;