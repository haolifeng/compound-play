const keyValueFile = require('../../hdevframe/FileLib/KeyValueFile');


const sysConfig = require('../../gconfig/sysConfig');

const pathconfig = sysConfig.abiPathConfig;
let abi = require(pathconfig.Unitroller.abifile);
let byteCode = require(pathconfig.Unitroller.bytecodefile);
const deployFunc = require('../../hdevframe/deployFunc');
const account = require('../../accounts/admin');
const chainId=168;

const unitrollerObj = require('../contractObjects/unitroller');

let comptrollerScAddr = sysConfig.scAddrConfig.Comptroller;
let gas = 5000000;

const main= async ()=>{
    let from = account.address;
    let bufPrivKey = Buffer.from(account.privateKey.slice(2),'hex');

    let receipt  = await unitrollerObj._setPendingImplementation(comptrollerScAddr, from,bufPrivKey,gas);


};
main();