let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

let underlyingConfig = require('../gconfig/underlyingConfig');

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);

const ERC20Contract = require('../hdevframe/ERC20Contract');

const scAddr = underlyingConfig.THaoCoin.scAddr;





//token

const hao_scAddr = underlyingConfig.THaoCoin.scAddr;
const red_scAddr = underlyingConfig.TRedCoin.scAddr;

// account
let adminAccount = require('../accounts/admin');
let user1Account = require('../accounts/user1');
let user2Account = require('../accounts/user2');



let gas = 5000000;


