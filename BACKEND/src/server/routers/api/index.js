const { Router } = require('express');
const router = Router();

const cardRouter = require("./v1/card")
const loginRouter = require("./v1/login")

router.use('/', cardRouter);
router.use('/', loginRouter);

module.exports = router;