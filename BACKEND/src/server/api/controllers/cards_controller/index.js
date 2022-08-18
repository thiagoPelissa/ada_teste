const insert = require('./insert');
const list = require('./list');
const update = require('./update');
const remove = require('./remove');
const { body } = require("express-validator")

const inputValidator = (method) => {
    switch (method) {
        case 'createCard': {
            return [
                body('titulo').notEmpty().withMessage("O campo titulo é obrigatório"),
                body('conteudo').notEmpty().withMessage("O campo conteudo é obrigatório"),
                body('lista').notEmpty().withMessage("O campo lista é obrigatório"),
            ]
        }
        case 'updateCard': {
            console.log('Validaaaaa')
            return [
                body('titulo').notEmpty().withMessage("O campo titulo é obrigatório"),
                body('conteudo').notEmpty().withMessage("O campo conteudo é obrigatório"),
                body('lista').notEmpty().withMessage("O campo lista é obrigatório"),
            ]
        }
    }
}

module.exports = {
    insert,
    list,
    update,
    remove,
    inputValidator
};
