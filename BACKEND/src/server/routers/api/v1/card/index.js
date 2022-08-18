const { Router } = require('express');
const router = Router();
const cardController = require('../../../../api/controllers/cards_controller');
const auth_middleware = require('../../../../api/middlewares/authentication_middleware')
const lof_middleware = require('../../../../api/middlewares/log_middleware')



router.post('/cards',  auth_middleware.jwtValidation, cardController.inputValidator('createCard'), cardController.insert.fn);
router.get('/cards', auth_middleware.jwtValidation, cardController.list.fn);
router.put('/cards/:id',  auth_middleware.jwtValidation, lof_middleware.logging, cardController.inputValidator('updateCard'), cardController.update.fn);
router.delete('/cards/:id', lof_middleware.logging, auth_middleware.jwtValidation, cardController.remove.fn);

module.exports = router;
