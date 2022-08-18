
const jwt = require('jsonwebtoken');
const config = require('../../../config/index');


const jwtValidation = (req, res, next) => {
    try {
        const JWT_SECRET = config.JWT_SECRET;
        const auth = req.headers.authorization;
        const token = auth.replace('Bearer ', '');
        if (auth) {
            const decoded = jwt.verify(token, JWT_SECRET);
            res.locals = { user: decoded.user };
            console.info('JWT Middleware - validated token for user: ' + decoded.user);
        }
        else throw new Error("token not found");
    }
    catch (err) {
        console.info('JWT Middleware - error validating token\n' + err);
        res.sendStatus(401);
        return res.end();
    }
    next();
};

module.exports = {
    jwtValidation
}