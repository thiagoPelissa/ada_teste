
const uuid = require('uuid');

function generatesUUID(){
    return uuid.v1();
}

module.exports = generatesUUID;
