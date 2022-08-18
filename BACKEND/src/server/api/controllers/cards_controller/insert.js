const useCase = require('../../../../business/use_cases/card_usecase');
const { validationResult } = require("express-validator")

const fn = async (req, res) => {
    try {
        console.log(`Inserting cards: ${req.originalUrl}.`);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error('Parametros inválidos para criação de card.');
            return res.status(400).json({ errors: errors.array() });
        }

        const card = await new useCase.UseCaseModule.CardUseCase().insert(req.body);

        res.status(201).json(card);
    } catch (err) {
        console.error(`Error on insert Card: ${err.message}`);
        return res.status(400).json({ message: 'Bad Request Error' });
    }
};

module.exports = {
    fn
};
