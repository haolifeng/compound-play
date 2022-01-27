const {Web3ContractOnChain, Web3Http, Web3OffChain, Web3OnChain, txGenerator} = require('../../hdevframe/web3Lib');
const sysConfig = require('../../gconfig/sysConfig');

let nodeUrl = sysConfig.nodeUrl;
let scAddr = sysConfig.scAddrConfig.Comptroller;
let abi = require(sysConfig.abiPathConfig.Comptroller.abifile);
let web3Http = new Web3Http(nodeUrl);
let web3 = web3Http.getWeb3();
let web3OnChain = new Web3OnChain(web3);
let chainId = 168;
let web3OffChain = new Web3OffChain();
class ComptrollerObj extends Web3ContractOnChain {
    constructor(web3, abi,scAddr) {
        super(web3, abi,scAddr);
    }
    async _become(utrollerScAddr, from, privateKey, gas){
        let gasPrice = await web3OnChain.getGasPrice();
        let nonce = await web3OnChain.getNonce(from);
        let methodPayload = this.getContractFuncPayload('_become',[utrollerScAddr]);
        let rawTx = txGenerator.getRawTx(chainId, nonce, from, this.scAddr,'',methodPayload,gas, gasPrice, gas);

        let signedTx = await web3OffChain.signTransaction(rawTx,privateKey);

        let receipt = await web3OnChain.sendSignedTransaction(signedTx);
        console.log('receipt: ', receipt);
    }




}


let comptroller = new ComptrollerObj(web3,abi, scAddr);


module.exports = comptroller;