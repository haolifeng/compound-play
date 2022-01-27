const keyValueFile = require('../../hdevframe/FileLib/KeyValueFile');


const sysConfig = require('../../gconfig/sysConfig');

const pathconfig = sysConfig.abiPathConfig;
let abi = require(pathconfig.Unitroller.abifile);
let byteCode = require(pathconfig.Unitroller.bytecodefile);
const deployFunc = require('../../hdevframe/deployFunc');
const account = require('../../accounts/admin');
const chainId=168;

const main= async ()=>{
    let from = account.address;
    let bufPrivKey = Buffer.from(account.privateKey.slice(2),'hex');
    let receipt = await deployFunc(sysConfig.nodeUrl,abi,byteCode,[],chainId,from,bufPrivKey,5000000);
    console.log('receipt : ',receipt);
    if(receipt){
        keyValueFile.fileWriteKeyValue(sysConfig.scAddrFilePath,"Unitroller", receipt.contractAddress);
    }

}
main().catch(e=>{
    console.log('e: ',e);
    process.exit(1);
})

