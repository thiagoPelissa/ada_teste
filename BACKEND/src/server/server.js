require('dotenv').config();
const express = require('express');
var cors = require('cors');
const config = require('../config/index');
const sequelize = require('../infra/sequelize/config');
const ApiRouters = require('./routers/api');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger.json');


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const app = express();

app.use(cors());

app.use(express.json());

app.use('', ApiRouters);


if (config.ENVIRONMENT === 'DEV') {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));
}

app.listen(5001, () => console.log('listening on http://localhost:5001'));
