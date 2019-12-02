const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//Routers
const collectorRouter = require('../routes/collector-router');
const collectionRouter = require('../routes/collection-router');
const paleontSiteRouter = require('../routes/paleontSite-router');
const pieceRouter = require('../routes/piece-router');
const userRouter = require('../routes/user-router');

//Ivocação do Server Web
const app = express();

//Json parse
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

//Conexão com o banco de dados
mongoose.connect(variables.Database.connection, {useNewUrlParser: true, useCreateIndex: true})

//Configuração de Rotas
app.use('/api/collection', collectionRouter);
app.use('/api/collector', collectorRouter);
app.use('/api/papleontSite', paleontSiteRouter);
app.use('/api/piece', pieceRouter);
app.use('/api/user', userRouter);

module.exports = app;