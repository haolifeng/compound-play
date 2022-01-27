let blockNumber = 1921;

const comptrolerProxy = require('../../contractObjs/comptrollerProxy');

const test = async ()=>{
    let allevens = await comptrolerProxy.getPastEvents('allEvents',blockNumber,2203);
    console.log('allevents --  ', allevens);
}

test();

