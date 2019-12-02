'use strict'

const repository = require('../repositories/piece-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function pieceController() {

}

pieceController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.namePiece, 'Nome obrigatória');
    _validationContract.isRequired(req.body.numberPiece, 'Número da peça obrigatório');
    _validationContract.isRequired(req.body.partitionPiece, 'Partição obrigatório');
    _validationContract.isRequired(req.body.importancePiece, 'Importância obrigatória');
    _validationContract.isRequired(req.body.collectionPiece, 'Coleção obrigatória');
    _validationContract.isRequired(req.body.collectionPieceDate, 'Data de coleta obrigatória');
    _validationContract.isRequired(req.body.procedurePiece, 'Procedência obrigatória');
    _validationContract.isRequired(req.body.paleontSitePiece, 'Sítio Paleontológico obrigatório');
    _validationContract.isRequired(req.body.collectorPiece, 'Coletor obrigatório');

    ctrlBase.post(_repo, _validationContract, req, res);
};

pieceController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.namePiece, 'Nome obrigatória');
    _validationContract.isRequired(req.body.numberPiece, 'Número da peça obrigatório');
    _validationContract.isRequired(req.body.partitionPiece, 'Partição obrigatório');
    _validationContract.isRequired(req.body.importancePiece, 'Importância obrigatória');
    _validationContract.isRequired(req.body.collectionPiece, 'Coleção obrigatória');
    _validationContract.isRequired(req.body.collectionPieceDate, 'Data de coleta obrigatória');
    _validationContract.isRequired(req.body.procedurePiece, 'Procedência obrigatória');
    _validationContract.isRequired(req.body.paleontSitePiece, 'Sítio Paleontológico obrigatório');
    _validationContract.isRequired(req.body.collectorPiece, 'Coletor obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

pieceController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

pieceController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

pieceController.prototype.getCollectionByID = async (req, res) => {
    try {
        let id = req.params.id;
        if(id) {
            let data = await _repo.getCollectionByID(req.params.id);
            res.status(200).send(data);
        } else {
            res.status(400).send({
                message: 'ID da coleção não informado',
                validation: {}
            })
        }
    } catch (error) {
        console.log('Erro no get: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
}

pieceController.prototype.getSubCollectionByID = async (req, res) => {
    try {
        let data = await _repo.getSubCollectionByID(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        console.log('Erro no get: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
}

pieceController.prototype.getPaleontSiteByID = async (req, res) => {
    try {
        let id = req.params.id;
        if(id) {
            let data = await _repo.getPaleontSiteByID(req.params.id);
            res.status(200).send(data);
        } else {
            res.status(400).send({
                message: 'ID do sitío paleontológico não informado',
                validation: {}
            })
        }
    } catch (error) {
        console.log('Erro no get: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
}

pieceController.prototype.getCollectorByID = async (req, res) => {
    try {
        let id = req.params.id;
        if(id) {
            let data = await _repo.getCollectorByID(req.params.id);
            res.status(200).send(data);
        } else {
            res.status(400).send({
                message: 'ID do coletor não informado',
                validation: {}
            })
        }
    } catch (error) {
        console.log('Erro no get: ', err);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }
}

pieceController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = pieceController;