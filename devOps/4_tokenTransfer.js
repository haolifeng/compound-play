let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

let underlyingConfig = require('../gconfig/underlyingConfig');

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);
const ERC20Contract = require('../hdevframe/ERC20Contract');

const hao_scAddr = underlyingConfig.THaoCoin.scAddr;
const red_scAddr = underlyingConfig.TRedCoin.scAddr;

let gas = 5000000;

let adminAccount = require('../accounts/admin');
let user1Account = require('../accounts/user1');
let user2Account = require('../accounts/user2');



const main = async (tokenAddr,fromAccount, to,amount )=>{
    let from = fromAccount.address;
    let strPrivK = fromAccount.privateKey;
    let buffPrivK = Buffer.from(strPrivK.slice(2),'hex');
    const erc20Contract = new ERC20Contract(nodeUrl,tokenAddr);
    let gasPrice = await web3OnChain.getGasPrice();
    let nonce = await web3OnChain.getNonce(from);
    let receipt = await erc20Contract.transfer(to,amount,168,nonce, from,gas, gasPrice, gas, buffPrivK);
    console.log('receipt is ', receipt);
}
let tokenAddr = hao_scAddr;
let fromAccount = adminAccount;
let to = user1Account.address;
let amount = 10;

main(tokenAddr,fromAccount,to, amount);