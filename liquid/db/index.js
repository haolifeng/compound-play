const mongoose = require('mongoose');

const Storage = require('./Storage');
const registry = require('../registry');

const dbConfig = registry.getLiquidConfig().storage;

let dbOption = {

    useNewUrlParser: true,

    connectTimeoutMS: 30000,
    socketTimeoutMS: 360000
};

let dburl = dbConfig.dbUrl;
let db = mongoose.createConnection(dburl, dbOption);

db.on('conneted', function(err){

});

let storage = new Storage(db);

module.exports = storage;