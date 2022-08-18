const useCase = require('../../../../business/use_cases/card_usecase');


const fn = async (req, res) => {
    try {
        console.log(`listing cards: ${req.originalUrl}.`);
        const cards = await new useCase.UseCaseModule.CardUseCase().get();

        return res.status(200).send(cards);
    } catch (err) {
        console.error(`Error on list Cards: ${err.message}`);
        return res.status(400).json({ message: 'Bad Request Error' });
    }
};

module.exports = {
    fn,
};
