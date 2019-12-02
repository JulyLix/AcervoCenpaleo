'use strict'

const repository = require('../repositories/user-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function userController() {

}

userController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nameUser, 'Nome obrigatória');
    _validationContract.isRequired(req.body.cpfUSer, 'CPF obrigatório');
    _validationContract.isRequired(req.body.emailUser, 'E-mail obrigatório');
    _validationContract.isRequired(req.body.passwdUser, 'Senha obrigatória');

    ctrlBase.post(_repo, _validationContract, req, res);
};

userController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nameUser, 'Nome obrigatória');
    _validationContract.isRequired(req.body.cpfUSer, 'CPF obrigatório');
    _validationContract.isRequired(req.body.emailUser, 'E-mail obrigatório');
    _validationContract.isRequired(req.body.passwdUser, 'Senha obrigatória');

    ctrlBase.put(_repo, _validationContract, req, res);
};

userController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

userController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

userController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = userController;