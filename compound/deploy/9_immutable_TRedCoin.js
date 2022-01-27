const keyValueFile = require('../../hdevframe/FileLib/KeyValueFile');


const sysConfig = require('../../gconfig/sysConfig');

const pathconfig = sysConfig.abiPathConfig;
let abi = require(pathconfig.CErc20Immutable.abifile);
let byteCode = require(pathconfig.CErc20Immutable.bytecodefile);
const deployFunc = require('../../hdevframe/deployFunc');
const account = require('../../accounts/admin');
const chainId=168;

const scAddrConfig = sysConfig.scAddrConfig;
const comptrollerAddr = scAddrConfig.Unitroller;
const interestRateModelAddr = scAddrConfig.WhitePaperInterestRateModel;
let initialExchangeRateMantissa_ = 1;

let underlyInt = sysConfig.underlyingConfig.TRedCoin.scAddr
let name = 'test-red';
let symbol = 'TRed';
let decimal = 18;
let admin_ = account.address;

const main = async ()=>{
    let from = account.address;
    let bufPrivKey = Buffer.from(account.privateKey.slice(2),'hex');

    let receipt = await deployFunc(sysConfig.nodeUrl,abi,byteCode,[underlyInt,comptrollerAddr,interestRateModelAddr,initialExchangeRateMantissa_, name,symbol, decimal,admin_],chainId,from,bufPrivKey,8000000);
    console.log('receipt : ',receipt);
    if(receipt){
        keyValueFile.fileWriteKeyValue(sysConfig.scAddrFilePath,"TRed", receipt.contractAddress);
    }
}
main();