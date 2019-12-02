'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema ({
    nameUser: {type: String, required: true, index: true, trim: true},
    cpfUser: {type: String, required: true},//tratar
    emailUser: {type: String, required: true},
    passwdUser: {type: String, required: true},//Ao menos uma letra e um numero
    photoUser: {type:String, required: false},
    typeUser: {type:String, required: true},//(verificar privilegios)tipo não selecionavel pelo usuario, apenas cadastros realizados pelo admin podem selecionar
    creationDate: {type: Date, default: Date.now},
    updateDate: {type: Date}
});

userModel.pre('save', next => {
    let now = new Date();
    if (!this.creationDate)
        this.creationDate = now;
        next();
});

module.exports = mongoose.model('users', userModel);
