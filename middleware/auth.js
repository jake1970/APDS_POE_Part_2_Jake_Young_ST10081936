/*
const jwt = require('jsonwebtoken')

//validate token
//if the token is valid then allow request/action
//if token is invalid then deny the request/action "unauthorized"
function auth(req, res, next) {
    const token = req.header('x-auth-token');
    let id;

    try{
        const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY) //set current secret to be an env variable
        id = userId;
    } catch (err) {
        return res.sendStatus(401);
    }

    if (id) {
        req.user = { id };
        return next();
    }
    res.sendStatus(401)
}

module.export = (req, res, next) =>
{
    try{
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    }
    catch(error)
    {
        res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = auth;
*/

//middle ware for user authentication
const jwt = require('jsonwebtoken')

//function to authenticate user by using ID in header
function auth(req, res, next)
{
    const token = req.header('x-auth-token')
    let id;
    
    try
    {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        id = userId
    }
    catch (err)
    {
        return res.sendStatus(401)
    }

    if (id)
    {
        req.user = { id };
        return next() 
    }
    res.sendStatus(401);
}

module.exports = auth;