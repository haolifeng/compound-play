const THaoCoin = artifacts.require("THaoCoin");

const TRedCoin = artifacts.require('TRedCoin');


module.exports = async (deployer)=>{
    let tHaoCoin = await deployer.deploy(THaoCoin);
    let tRedCoin = await deployer.deploy(TRedCoin);


}