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

const main = async (scAddr, user1,user2)=>{
    const erc20Contract = new ERC20Contract(nodeUrl,scAddr);
    let receipt = await erc20Contract.allowance(user1,user2);
    console.log('receipt is ', receipt);
}

let scAddr = hao_scAddr;
let user1 = user1Account.address;
let user2 = user2Account.address;

main(scAddr,  user1,user2);
