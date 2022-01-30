const BaseStatus = require('./BaseStatus');

class MarketStatus extends BaseStatus {
    constructor(marketAddress, chainAccess, storage){
        super(marketAddress.toLowerCase(), chainAccess,storage);
        this.type="Market";

        this.properties.cash = "0";
        this.properties.collateral_factor = "0";
        this.properties.exchange_rate = "0";
        this.properties.interest_rate_model_address  = "";
        this.properties.name = "";
        this.properties.symbol = "";
        this.properties.decimals = 0;
        this.properties.token_Address = marketAddress.toLowerCase();
        this.properties.underlying_address = "";
        this.properties.underlying_name = "";
        this.properties.underlying_symblo = "";
        this.properties.underlying_decimals = 0;
        this.properties.number_of_borrowers = 0;
        this.properties.number_of_suppliers = 0;
        this.properties.underlying_price = '0';
        this.properties.reserves = '0';
        this.properties.borrow_index = '0';
        this.properties.accrual_block_number = '0';

        this.properties.supply_rate = '0';
        this.properties.borrow_rate = '0';
        this.properties.total_supply = '0';
        this.properties.timestamp = '0';

        this.properties.price_oracle='';

        this.properties.close_factor="0";
        this.properties.liquidation_incentive="0";
        this.properties.multiplierPerBlock = '0';
        this.properties.baseRatePerBlock = '0';

        this.properties.comp_speed = '0';
        this.properties.comp_index_borrow ='0';
        this.properties.comp_block_borrow = '0';
        this.properties.comp_index_supply = '0';
        this.properties.comp_block_supply = '0';
        this.properties.rewardAddress = '';
        this.properties.totalSpeed = '0';
        this.properties.halfBonusPerBlock = '0';
        this.properties.startBlock = '0';
        this.properties.borrowCap = '0';

    }
}

module.exports = MarketStatus;