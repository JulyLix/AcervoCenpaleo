'use stric'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/collector-controller');
const auth = require('../middleware/authentication')

let _ctrl = new controller();

//get
router.get('/', auth, _ctrl.get);

//get by id
router.get('/:id', auth, _ctrl.getById);

//post - create
router.post('/', auth, _ctrl.post);

//put - update
router.put('/:id', auth, _ctrl.put);

//delete
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;