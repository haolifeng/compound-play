const AccountLib = require('../hdevframe/AccountLib');

let accountFile =  __dirname + '/UTC--2022-01-26T11-57-39.872132000Z--192c076915427cb85d95a8a2fcb6f8100a65e90e';

let miner = new AccountLib.KeyStoreAccount(accountFile);
miner.init();

module.exports = miner;
