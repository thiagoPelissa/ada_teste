const chalk = require('chalk');
const useCase = require('../../../business/use_cases/card_usecase');


const logging = async (req, res, next) => {
    const id = req.params.id;
    const dateTime = new Date().toLocaleString('pt-br');
    
    if (req.method === 'PUT') {
        const { titulo } = req.body;
        console.info(chalk.yellow(`${dateTime} - Card ${id} - ${titulo} - Alterado`));
        next();
    }

    else if (req.method === 'DELETE') {
        const result = await new Promise((resolve) => {
            new useCase.UseCaseModule.CardUseCase().getById(id).then(res => {
                resolve(res);
                next();
            }).catch((error) => {
                console.error('Failed to delete record: ', error);
                resolve(null);
            });
        });
        console.info(chalk.yellow(`${dateTime} - Card ${id} - ${result.titulo} - Removido`));
    }
}


module.exports = {
    logging
}