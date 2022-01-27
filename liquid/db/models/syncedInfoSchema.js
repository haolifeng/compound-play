const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const syncedInfoSchema = new Schema({
    chainType: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    scannedBlockNumber: {
        type: Number,
        required: true,
        default: '0'
    }
}, {
    collection: 'chainSyncedInfo',
    id: false
});

module.exports = syncedInfoSchema;