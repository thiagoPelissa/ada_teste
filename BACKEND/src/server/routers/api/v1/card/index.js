const { Router } = require('express');
const router = Router();
const cardController = require('../../../../api/controllers/cards_controller');


router.post('/cards', cardController.inputValidator('createCard'), cardController.insert.fn);
router.get('/cards', cardController.list.fn);
router.put('/cards/:id', cardController.inputValidator('updateCard'), cardController.update.fn);
router.delete('/cards/:id', cardController.remove.fn);

module.exports = router;