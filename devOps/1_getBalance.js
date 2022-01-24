let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);

let admin = '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9'
let user1 = '0x9F7ffcb016b0f7b142529bF27ef1eC5b0039C32C';
let user2 = '0xdC45Bc8e4d69A9922fd8d24DA7eDd996b765235D';


const main = async (account)=>{

    let balance = await web3OnChain.getBalance(account);
    console.log('balance', balance);



};
let account = admin;

main(account).catch((e)=>{
    console.log('e: ',e);
    process.exit(1);
})
