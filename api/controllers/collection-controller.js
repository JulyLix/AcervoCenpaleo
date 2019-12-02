'use strict'

const repository = require('../repositories/collection-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function collectionController() {

}

collectionController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Nome obrigatório');
    _validationContract.isRequired(req.body.initials, 'Iniciais obrigatórias');

    ctrlBase.post(_repo, _validationContract, req, res);
};

collectionController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Nome obrigatório');
    _validationContract.isRequired(req.body.initials, 'Iniciais obrigatórias');

    ctrlBase.put(_repo, _validationContract, req, res);
};

collectionController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

collectionController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

collectionController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = collectionController;