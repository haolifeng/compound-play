const keyValueFile = require('../../hdevframe/FileLib/KeyValueFile');


const sysConfig = require('../../gconfig/sysConfig');

const pathconfig = sysConfig.abiPathConfig;
let abi = require(pathconfig.Comptroller.abifile);
let byteCode = require(pathconfig.Comptroller.bytecodefile);
const deployFunc = require('../../hdevframe/deployFunc');
const account = require('../../accounts/admin');
const chainId=168;

let gas = 5000000;
let comptrollerObj = require('../contractObjects/ComptrollerObj');

let unitrollerAddr = sysConfig.scAddrConfig.Unitroller;
const main= async ()=>{
    let from = account.address;
    let bufPrivKey = Buffer.from(account.privateKey.slice(2),'hex');

    let receipt  = await comptrollerObj._become(unitrollerAddr,  from, bufPrivKey, gas);


};
main();