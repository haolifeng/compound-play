let abi = require('../abi/erc20');
let web3Lib = require('../web3Lib');
class ERC20Contract {
    constructor(url,scAddr){
        this.scAddr = scAddr;
        this.web3Http = new web3Lib.Web3Http(url);
        this.web3OnChain = new web3Lib.Web3OnChain(this.web3Http.getWeb3());
        this.web3OffChain = new web3Lib.Web3OffChain(this.web3Http.getWeb3());
        this.web3ContractOnChain = new web3Lib.Web3ContractOnChain(this.web3Http.getWeb3(),abi,scAddr);
    }
    async balanceOf(owner){
        let ret = await this.web3ContractOnChain.contractFuncCall("balanceOf", [owner]);
        return ret;
    }
    async allowance(owner, spender){
        let ret = await this.web3ContractOnChain.contractFuncCall('allowance',[owner,spender]);
        return ret;

    }
    async name(){
        let name = await this.web3ContractOnChain.contractFuncCall('name',[]);
        return name;

    }
    async symbol(){
        let symbol = await this.web3ContractOnChain.contractFuncCall('symbol',[]);
        return symbol;
    }
    async decimals(){
        let decimals = await this.web3ContractOnChain.contractFuncCall('decimals',[]);
        return decimals;
    }
    async transfer( to, value, chainId,nonce, from, gas, gasPrice, gasLimit, buffPrivK){
        let payload =  this.web3ContractOnChain.getContractFuncPayload('transfer',[to, value]);
        let rawTx = web3Lib.txGenerator.getRawTx(chainId,nonce, from, this.scAddr,'',payload,gas, gasPrice, gasLimit);

        let signedTx = await this.web3OffChain.signTransaction(rawTx,buffPrivK);

        let receipt = await this.web3OnChain.sendSignedTransaction(signedTx);

        return receipt;



    }
    async transferFrom(sender, to, value, chainId,nonce, from, gas, gasPrice, gasLimit, buffPrivKey){
        let payload =  this.web3ContractOnChain.getContractFuncPayload('transferFrom',[sender, to, value]);
        let rawTx = web3Lib.txGenerator.getRawTx(chainId,nonce, from, this.scAddr,'',payload,gas, gasPrice, gasLimit);

        let signedTx = await this.web3OffChain.signTransaction(rawTx,buffPrivKey);

        let receipt = await this.web3OnChain.sendSignedTransaction(signedTx);

        return receipt;
    }
    async approve(spender, value,chainId,nonce, from, gas, gasPrice, gasLimit, buffPrivK){

        let payload =  this.web3ContractOnChain.getContractFuncPayload('approve',[spender, value]);
        let rawTx = web3Lib.txGenerator.getRawTx(chainId,nonce, from, this.scAddr,'',payload,gas, gasPrice, gasLimit);

        let signedTx = await this.web3OffChain.signTransaction(rawTx,buffPrivK);

        let receipt = await this.web3OnChain.sendSignedTransaction(signedTx);

        return receipt;
    }

}

module.exports = ERC20Contract;