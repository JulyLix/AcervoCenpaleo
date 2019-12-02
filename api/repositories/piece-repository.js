require('../models/piece-model');
const base = require('../bin/base/repository-base');

class pieceRepository {
    constructor() {
        this._base = new base('pieces');
    }

    async create(data) {
        return await this._base.create(data);
    }

    async update(id, data) {
        return await this._base.update(id, data);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.delete(id);
    }

    async getByCollectionID(id) {
        return await this._base._model.find({ collectionID: id });
    }

    async getBySubCollectionID(id) {
        return await this._base._model.find({ collectionID: id });
    }

    async getByCollectorID(id) {
        return await this._base._model.find({ collectorID: id });
    }

    async getPaleontSiteID(id) {
        return await this._base._model.find({ paleontSiteID: id });
    }

}

module.exports = pieceRepository;