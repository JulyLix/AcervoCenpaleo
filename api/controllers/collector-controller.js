'use strict'
const repository = require('../repositories/collector-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function collectorController() {

}

collectorController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Nome obrigatório');

    ctrlBase.post(_repo, _validationContract, req, res);
};

collectorController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Nome obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

collectorController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

collectorController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

collectorController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = collectorController;