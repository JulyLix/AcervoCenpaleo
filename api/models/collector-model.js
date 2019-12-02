'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const collectorModel = new schema({
    nameCollector: {type: String, trim:true, required:true, index:true},
    emailCollector: {type: String, required:true},
    creationDate: {type: Date, default: Date.now},
    updateDate: {type: Date}
});

collectorModel.pre('save', next => {
    let now = new Date();
    if (!this.creationDate)
        this.creationDate = now;
        next();
});

module.exports = mongoose.model('collectors', collectorModel);