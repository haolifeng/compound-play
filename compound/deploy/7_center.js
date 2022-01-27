const keyValueFile = require('../../hdevframe/FileLib/KeyValueFile');


const sysConfig = require('../../gconfig/sysConfig');

const pathconfig = sysConfig.abiPathConfig;
let abi = require(pathconfig.CEther.abifile);
let byteCode = require(pathconfig.CEther.bytecodefile);
const deployFunc = require('../../hdevframe/deployFunc');
const account = require('../../accounts/admin');
const chainId=168;

const scAddrConfig = sysConfig.scAddrConfig;
const comptrollerAddr = scAddrConfig.Unitroller;
const interestRateModelAddr = scAddrConfig.WhitePaperInterestRateModel;
let initialExchangeRateMantissa_ = 1;
let name = 'etheruem  token';
let symbol = 'ETH';
let decimal = 18;
let admin_ = account.address;

const main= async ()=>{
    let from = account.address;
    let bufPrivKey = Buffer.from(account.privateKey.slice(2),'hex');
    let receipt = await deployFunc(sysConfig.nodeUrl,abi,byteCode,[comptrollerAddr,interestRateModelAddr,initialExchangeRateMantissa_, name,symbol, decimal,admin_],chainId,from,bufPrivKey,8000000);
    console.log('receipt : ',receipt);
    if(receipt){
        keyValueFile.fileWriteKeyValue(sysConfig.scAddrFilePath,"CEther", receipt.contractAddress);
    }

}
main().catch(e=>{
    console.log('e: ',e);
    process.exit(1);
})