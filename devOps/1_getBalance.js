let nodeUrl = require('../gconfig/sysConfig').nodeUrl;

const {Web3Http, Web3OnChain, Web3OffChain }  = require('../hdevframe/web3Lib');

const web3Http = new Web3Http(nodeUrl);
const web3 = web3Http.getWeb3();
const web3OnChain = new Web3OnChain(web3);


let adminAccount = require('../accounts/admin');
let user1Account = require('../accounts/user1');
let user2Account = require('../accounts/user2');


const main = async (account)=>{

    let balance = await web3OnChain.getBalance(account);
    console.log('balance', balance);



};
let account = adminAccount.address;

main(account).catch((e)=>{
    console.log('e: ',e);
    process.exit(1);
})
