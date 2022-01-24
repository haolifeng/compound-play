const AccountLib = require('../hdevframe/AccountLib');

let accountFile =  __dirname + '/0xb573270303b9603755cb25ec2d6997d141b9e03d.json';

let miner = new AccountLib.KeyStoreAccount(accountFile);
miner.init();

module.exports = miner;
