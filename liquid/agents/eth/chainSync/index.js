const BaseHandler = require('../../BaseHandler');
class ChainSync extends BaseHandler{
    constructor(handlerName,agentName, chainName,chainType){
        super(handlerName,agentName,chainName,chainType);
    }

}

module.exports = ChainSync;