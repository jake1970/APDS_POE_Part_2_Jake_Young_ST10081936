const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { isValidPassword } = require('../utils/hash');

//auth route
//contains methods associated with authentication

//login method
router.post('/', async (req, res) => {

    const user = await User.findOne({username : req.body.username});
    if (!user)
    return res.status(401).json({error: 'Incorrect username or password'});

    const valid = await isValidPassword(req.body.password, user.password);

    if (!valid)
    return res.status(401).json({error: 'Incorrect username or password'});

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY);
    res.send({token})
});

module.exports = router;