'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pieceModel = new schema({
    numberPiece: {type: String, required: true},
    namePiece: {type: String, required: true},
    partitionPiece: {type: String, require: true},
    importancePiece: {type: String, required: true},
    outcropPiece:{type: String, required: true},
    physicalLocPiece: {type: String},
    collectionPieceDate: {type: Date, required: true},//Data de coleta da peça
    collectionPiece: {type: schema.Types.ObjectId, ref: 'collections', required: true},
    subCollectionPiece: [{type: schema.Types.ObjectId, ref: 'collections'}],
    paleontSitePiece: {type: schema.Types.ObjectId, ref: 'paleontSites', required: true},
    descriptionPiece: {type: String},
    imagePiece: {type: String},
    collectorPiece: {type: schema.Types.ObjectId, ref: 'collectors', required: true},
    statusPiece: {type: String},
    creationDate: {type: Date, default: Date.now},
    updateDate: {type: Date}
});

pieceModel.pre('save', next => {
    let now = new Date();
    if (!this.creationDate)
        this.creationDate = now;
    next();
});

module.exports = mongoose.model('pieces', pieceModel);