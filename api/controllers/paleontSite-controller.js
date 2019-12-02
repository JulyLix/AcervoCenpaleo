'use strict'

const repository = require('../repositories/paleontSite-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function paleontSiteController() {

}

paleontSiteController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.latitude, 'Latitude obrigatória');
    _validationContract.isRequired(req.body.longitude, 'Longitude obrigatória');
    _validationContract.isRequired(req.body.address, 'Endereço obrigatório');


    ctrlBase.post(_repo, _validationContract, req, res);
};

paleontSiteController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.latitude, 'Latitude obrigatória');
    _validationContract.isRequired(req.body.longitude, 'Longitude obrigatória');
    _validationContract.isRequired(req.body.address, 'Endereço obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

paleontSiteController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

paleontSiteController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

paleontSiteController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = paleontSiteController;