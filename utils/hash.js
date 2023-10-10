const bcrypt = require('bcrypt')

//hash the plain text password
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hashed = bcrypt.hash(password, salt)
    return hashed
}

//determine if the password is valid
//checks to see if the given password matches the password contained in the database 
async function isValidPassword(password, hash) {
    return await bcrypt.compare(password, hash)
}

module.exports = { hashPassword, isValidPassword }