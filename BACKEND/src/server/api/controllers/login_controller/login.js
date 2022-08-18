const config = require('../../../../config/index');
const jwt = require('jsonwebtoken');



const fn = async (req, res) => {
    const { login, senha } = req.body;
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD, JWT_SECRET } = config;
    if (login === DEFAULT_LOGIN && senha === DEFAULT_PASSWORD) {
        const token = jwt.sign({ user: `${DEFAULT_LOGIN}` }, JWT_SECRET, { expiresIn: '1h' });
        console.log(token)
        res.status = 200;
        return res.json(token);
    }
    res.status = 401;
    res.end();
};

module.exports = {
    fn
};
