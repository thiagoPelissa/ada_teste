const localConfig = require('./local.json');

const config = {
    JWT_SECRET: process.env.JWT_SECRET || localConfig.jwt_secret,
    DEFAULT_LOGIN: process.env.DEFAULT_LOGIN || localConfig.default_login,
    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD || localConfig.default_password,
    DATABASE_NAME: process.env.DATABASE_NAME || localConfig.database_name,
    DATABASE_USER: process.env.DATABASE_USER || localConfig.database_user,
    DATABASE_PASS: process.env.DATABASE_PASS || localConfig.database_pass,
    DATABASE_HOST: process.env.DATABASE_HOST || localConfig.database_host,
    DATABASE_PORT: process.env.DATABASE_PORT || localConfig.database_port,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || localConfig.database_dialect,
    ENVIRONMENT: process.env.ENVIRONMENT || localConfig.environment,
};
module.exports = config;
