require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
var cors = require('cors');
const config = require('../config/index');
const sequelize = require('../infra/sequelize/config');

const ApiRouters = require('./routers/api');


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const app = express();

app.use(cors());

app.use(express.json());


app.use('', ApiRouters);

app.post('/login', (req, res) => {
    const { login, senha } = req.body;
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD, JWT_SECRET } = config;
    if (login === DEFAULT_LOGIN && senha === DEFAULT_PASSWORD) {
        const token = jwt.sign({ user: `${DEFAULT_LOGIN}` }, JWT_SECRET, { expiresIn: '1h' });
        console.log(token)
        return res.json(token);
    }
    res.status = 401;
    res.end();
});

const jwtValidation = (req, res, next) => {
    try {
        const JWT_SECRET = config.JWT_SECRET;
        const auth = req.headers.authorization;
        const token = auth.replace('Bearer ', '');
        if (auth) {
            const decoded = jwt.verify(token, JWT_SECRET);
            res.locals = { user: decoded.user };
            console.info('JWT Middleware - validated token for user: ' + decoded.user);
        }
        else throw new Error("token not found");
    }
    catch (err) {
        console.info('JWT Middleware - error validating token\n' + err);
        res.sendStatus(401);
        return res.end();
    }
    next();
};

// app.use(jwtValidation);

app.listen(5001, () => console.log('listening on http://localhost:5001'));
