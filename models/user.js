const mongoose = require('mongoose')
const joi = require('joi')

//user model

//user schema containing user attributes
//the username must be unique for evry user
const userSchema = mongoose.Schema(
    {
        
        username: {type: String, unique: true},
        password: {type: String},
        firstName: {type: String},
        lastName: {type: String}
        
    }
)

const User = mongoose.model('User', userSchema)


//method to determine wether a user is considered valid
//validity of user determined by the attribute input and values
//eg if all fields are filled in and no more than 50 characters
function validateUser(user) {
    const schema = joi.object({
        username: joi.string().min(3).max(50).required(),
        password: joi.string().min(3).max(50).required(),
        firstName: joi.string().max(50).required(),
        lastName: joi.string().max(50).required()
    })
    return schema.validate(user)
}

module.exports = { User, validateUser }
