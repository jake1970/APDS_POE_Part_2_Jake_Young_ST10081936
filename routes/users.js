const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {User, validateUser} = require('../models/user')
const auth = require('../middleware/auth')
const { hashPassword } = require('../utils/hash')

//users route
//contains methods associated with users

//create new user
//create new user
router.post('/', async (req, res) =>{
    const {error} = validateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const isUnique = (await User.count({username: req.body.username})) === 0;
    if (!isUnique)
        return res
            .status(400)
            .json({error: 'The username or password is not valid'});
    try {
        const user = new User(req.body);
        user.password = await hashPassword(user.password);
        await user.save();
    }   catch (err){
        return res.status(500).json(err);
    }
    res.sendStatus(201);
})
/*
router.post ('/', async (req, res) => { 
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message)

    const isUnique = (await User.count({ username: req.body.username})) === 0
    if (!isUnique)
        return res
            .status(400)
            .json({error: 'The username or password is not valid'});

    try {
        const user = new User(req.body);
        user.password = await hashPassword(user.password);
        await user.save();
   
    } catch (err) {
        return res.status(500).json(err);
    }
    res.sendStatus(201);
})
*/

//get current user thats logged in
router.get('/', auth, async (req, res) => {
    res.send({currentUser: req.user});
});


module.exports = router