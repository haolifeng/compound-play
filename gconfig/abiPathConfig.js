let abiDir = __dirname +'/../compound/abi_bytecode/';
let buildDir = __dirname + '/../compound/build/contracts/';
let pathConfig = {
    SimplePriceOracle:{
        abifile: abiDir + 'SimplePriceOracle_abi.json',
        bytecodefile: abiDir + 'SimplePriceOracle_bytecode.json',
        trufflefile: buildDir + 'SimplePriceOracle.json',
    },
    WhitePaperInterestRateModel:{
        abifile: abiDir + 'WhitePaperInterestRateModel_abi.json',
        bytecodefile: abiDir + 'WhitePaperInterestRateModel_bytecode.json',
        trufflefile: buildDir + 'WhitePaperInterestRateModel.json',
    },
    Comptroller:{
        abifile: abiDir + 'Comptroller_abi.json',
        bytecodefile: abiDir + 'Comptroller_bytecode.json',
        trufflefile: buildDir + 'Comptroller.json',
    },
    Unitroller:{
        abifile: abiDir + 'Unitroller_abi.json',
        bytecodefile: abiDir + 'Unitroller_bytecode.json',
        trufflefile: buildDir + 'Unitroller.json',
    },
    CEther:{
        abifile: abiDir + 'CEther_abi.json',
        bytecodefile: abiDir + 'CEther_bytecode.json',
        trufflefile: buildDir + 'CEther.json',
    },
    CErc20Immutable:{
        abifile: abiDir + 'CErc20Immutable_abi.json',
        bytecodefile: abiDir + 'CErc20Immutable.json',
        trufflefile: buildDir + 'CErc20Immutable.json',
    },
    CErc20Delegate:{
        abifile: abiDir + 'CErc20Delegate_abi.json',
        bytecodefile: abiDir + 'CErc20Delegate.json',
        trufflefile: buildDir + 'CErc20Delegate.json',
    },
    CErc20Delegator:{
        abifile: abiDir + 'CErc20Delegator_abi.json',
        bytecodefile: abiDir + 'CErc20Delegator.json',
        trufflefile: buildDir + 'CErc20Delegator.json',
    },
    JumpRateModelV2:{
        abifile: abiDir + 'JumpRateModelV2_abi.json',
        bytecodefile: abiDir + 'JumpRateModelV2.json',
        trufflefile: buildDir + 'JumpRateModelV2.json',
    }

}

module.exports = pathConfig;