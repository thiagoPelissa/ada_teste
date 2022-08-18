const useCase = require('../../../../business/use_cases/card_usecase');
const { validationResult } = require("express-validator")


const fn = async (req, res) => {
    try {
        console.log(`Updating cards: ${req.originalUrl}.`);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error('Parametros inválidos para criação de card.');
            return res.status(400).json({ errors: errors.array() });
        }
        
        const { titulo, conteudo, lista} = req.body;
        const id = req.params.id;
        const card = await new useCase.UseCaseModule.CardUseCase().update(id, titulo, conteudo, lista);

        res.status(200).json(card);
    } catch (err) {
        console.error(`Error on update Card: ${err.message}`);
        return res.status(400).json({ message: 'Bad Request Error' });
    }
};

module.exports = {
    fn,
};
