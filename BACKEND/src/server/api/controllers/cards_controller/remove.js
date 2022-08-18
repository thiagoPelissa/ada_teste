const useCase = require('../../../../business/use_cases/card_usecase');


const fn = async (req, res) => {
    try {
        console.log(`deleting card: ${req.originalUrl}.`);
        const id = req.params.id;
        const cards = await new useCase.UseCaseModule.CardUseCase().remove(id);
        
        return res.status(200).send(cards);
    } catch (err) {
        console.error(`Error on list Cards: ${err.message}`);
        return res.status(404).json({ message: 'Bad Request Error' });
    }
};

module.exports = {
    fn,
};
