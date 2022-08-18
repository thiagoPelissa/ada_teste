const { Router } = require('express');
const router = Router();

const cardRouter = require("./v1/card")

router.use('/', cardRouter);

module.exports = router;