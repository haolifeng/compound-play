let mnemonic = require('./mnemoicwords');
const ethers = require('ethers');

const derivationPath = "m/44'/60'/1'/0/0";

const wallet = new ethers.Wallet.fromMnemonic(mnemonic,derivationPath);

console.log('wallet.address: ', wallet.address);
console.log('wallet.privateKey', wallet.privateKey);

module.exports = wallet;
