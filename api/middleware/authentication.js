const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['x-access-token'];
    if (token) {
        try {
            let decoded = await jwt.verify(token, variables.Security.secretKey);
            req.LogedUser = decoded;
            next();
        } catch (error) {
            res.status(401).send({ message: 'Token inválido' });
            return;
        }
    } else {
        res.status(401).send({ message: 'O token deve ser informado para ter acesso a esse recurso.' });
        return;
    }
}