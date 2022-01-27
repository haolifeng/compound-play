const BaseHandler = require('../../BaseHandler');
class EventHandler extends BaseHandler{
    constructor(handlerName,agentName, chainName,chainType){
        super(handlerName,agentName,chainName,chainType);
    }

}

module.exports = EventHandler;