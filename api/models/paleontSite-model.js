'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const paleontSiteModel = new schema({
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    address: {type: String, required: true},
    creationDate: {type: Date, default: Date.now},
    updateDate: {type: Date}
});

paleontSiteModel.pre('save', next =>{
    let now = Date();
    if(!this.creationDate)
        this.creationDate = now;
    next();
});

module.exports = mongoose.model('paleontSites', paleontSiteModel);