let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

let underlyingConfig = require('../gconfig/underlyingConfig');

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);

const main = async (account, scAddr)=>{
    const erc20Contract = new ERC20Contract(nodeUrl,scAddr);
    let tokenBalance = await erc20Contract.balanceOf(account);
    console.log('tokenBlance is ', tokenBalance);
}

let admin = '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9'
let user1 = '0x9F7ffcb016b0f7b142529bF27ef1eC5b0039C32C';
let user2 = '0xdC45Bc8e4d69A9922fd8d24DA7eDd996b765235D';


const ERC20Contract = require('../hdevframe/ERC20Contract');

const red_scAddr = underlyingConfig.TRedCoin.scAddr;
const hao_scAddr = underlyingConfig.THaoCoin.scAddr;



let account = user1;
let scAddr = hao_scAddr;
main(account,scAddr);