const comptrollerProxy = require('../contractObjs/comptrollerProxy');

const sysConfig = require('../../gconfig/sysConfig');

const scAddrConfig = sysConfig.scAddrConfig;
const ctokenTRedCoinScAddr = scAddrConfig.TRed;

const ctokenTHaoCoinScAddr = scAddrConfig.THAO;

const ctokenCEtherScAddr = scAddrConfig.CEther;



let account = require('../../accounts/admin');
let accountAddr = account.address;
let strPrivK = account.privateKey;
let buffPrivK = Buffer.from(strPrivK.slice(2),'hex');

const gas = 5000000;

const supportMaket_eth = async ()=>{

    let receipt = await comptrollerProxy._supportMarket(ctokenCEtherScAddr,accountAddr,buffPrivK,gas);
    
}
const supportMaket_Thao = async ()=>{

     let receipt2 = await comptrollerProxy._supportMarket(ctokenTHaoCoinScAddr,accountAddr,buffPrivK,gas);
   
}
const supportMaket_Tred = async ()=>{

     let receipt3 = await comptrollerProxy._supportMarket(ctokenTRedCoinScAddr,accountAddr,buffPrivK,gas);

}
const supportMaket_All = async(

)=>{
    //await supportMaket_eth();
    await supportMaket_Thao();
    await supportMaket_Tred();
};

supportMaket_All();