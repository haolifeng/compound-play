let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

const {Web3Http, Web3OnChain, Web3OffChain, txGenerator }  = require('../hdevframe/web3Lib');
const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);
const web3OffChain = new Web3OffChain(web3);


const BigNumber = require('bignumber.js');


let fromAccount = require('../accounts/miner');


const fromPrivkey = fromAccount.getPrivKeyBuf('123456');
const fromAddr = fromAccount.getAccount();



const value = 5;
const gas = 5000000;
const chainId = 168;




const main = async (toAddr)=>{


    let gasPrice = await web3OnChain.getGasPrice();
    let data = '';
    let nonce = await web3OnChain.getNonce(fromAddr);
    let bnValue =new BigNumber(value);
    let strValue = '0x' + bnValue.shiftedBy(18).toString(16);
    let rawTx = txGenerator.getRawTx(chainId,nonce, fromAddr, toAddr, strValue, data, gas,gasPrice, gas);
    console.log('rawTx', rawTx);
    let signTx = await web3OffChain.signTransaction(rawTx,fromPrivkey);

    let receipt = await web3OnChain.sendSignedTransaction(signTx);
    console.log('receipt: ', receipt);


}
let toAccount = require('../accounts/admin');
//let toAccount = require('../accounts/user1');
//let toAccount = require('../accounts/user2');

const toAddr = toAccount.address;

main(toAddr).catch((e)=>{
    console.log('e: ',e);
    process.exit(1);
})



