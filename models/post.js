const mongoose = require('mongoose')
const joi = require('joi')


//post model

//post schema containing post attributes
const postSchema = mongoose.Schema(
    {
        title: {type: String},
        description: {type: String},
        departmentCode: {type: String},
        username: {type: String}
    }
)

const Post = mongoose.model('Post', postSchema)

//method to determine wether a post is considered valid
//validity of post determined by the attribute input and values
//eg if all fields are filled in and no more than 50 characters
function validatePost(Post) {
    const schema = joi.object({
        title: joi.string().min(3).max(50).required(),
        description: joi.string().min(3).max(50).required(),
        departmentCode: joi.string().min(3).max(50).required(),
        username: joi.string().min(3).max(50).required()
    })
    return schema.validate(Post)
}

module.exports = { Post, validatePost }