'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const collectionModel = new schema({
    nameCollection: {type: String, required: true, trim: true, index: true},
    initials: {type: String, required: true, trim: true, index: true},
    description: {type: String},
    creationDate: {type:Date, default:Date.now},
    updateDate: {type:Date} //Adicionado automaticamente no Update (Controller)
});

collectionModel.pre('save', next => {
    let now = new Date();
    if (!this.creationDate)
        this.creationDate = now;
        next();
});

module.exports = mongoose.model('collections', collectionModel);