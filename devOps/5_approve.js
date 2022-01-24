let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

let underlyingConfig = require('../gconfig/underlyingConfig');

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);

const ERC20Contract = require('../hdevframe/ERC20Contract');


//token

const hao_scAddr = underlyingConfig.THaoCoin.scAddr;
const red_scAddr = underlyingConfig.TRedCoin.scAddr;

// account
let adminAccount = require('../accounts/admin');
let user1Account = require('../accounts/user1');
let user2Account = require('../accounts/user2');



let gas = 5000000;





const main = async (scAddr, fromAccount, toAddress, value)=>{
    let from = fromAccount.address;
    let fromStrPrivK = fromAccount.privateKey;
    let fromBuffPrivK = Buffer.from(fromStrPrivK.slice(2),'hex');
    const erc20Contract = new ERC20Contract(nodeUrl,scAddr);

    let gasPrice = await web3OnChain.getGasPrice();
    let nonce = await web3OnChain.getNonce(from);
    let receipt = await erc20Contract.approve(toAddress,value,168,nonce,from,gas, gasPrice,gas, fromBuffPrivK);
    console.log('receipt is ', receipt);
}

let scAddr = hao_scAddr;
let fromAccount = user1Account;
let toAddress = user2Account.address;
let value = 1000000;

main(scAddr, fromAccount, toAddress, value);
