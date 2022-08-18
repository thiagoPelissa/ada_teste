const { Router } = require('express');
const router = Router();
const loginController = require('../../../../api/controllers/login_controller');

router.post('/login', loginController.login.fn);

module.exports = router;
