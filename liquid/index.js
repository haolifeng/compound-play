let registry = require('./registry');
let sysConfig = require('../gconfig/sysConfig');
registry.setSysConfig(sysConfig);

let liquidConfig = sysConfig.liquidConfig;

const Logger = require('./common/logger');

let logger = new Logger('liquidRobot',liquidConfig.log.logfile,liquidConfig.log.logErrorFile, liquidConfig.log.loglevel);

registry.setLogger(logger);

let storage = require('./db/index');

registry.setStorage(storage);
let App = require('./app');

const main = async ()=>{
    let app = new App();

    await app.init();
    await app.run();
}
main();

