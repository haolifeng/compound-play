let sysConfig = require('../../gconfig/sysConfig');
let pathConfig = sysConfig.abiPathConfig;
let apiFile = require('../../hdevframe/FileLib/abiFile');


const extract = (fileName) => {
    let abifile =pathConfig[fileName].abifile;
    let bytecodefile = pathConfig[fileName].bytecodefile;
    let trufflefile = pathConfig[fileName].trufflefile;
    apiFile.extractAbiFromTruffleBuild(trufflefile,abifile,bytecodefile);
}

module.exports = extract;