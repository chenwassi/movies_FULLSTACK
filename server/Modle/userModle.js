const mongoose = require ('mongoose')

const usersSchema = new mongoose.Schema({
    fullName:String,
    userName:String,
    password:String
})
const model = mongoose.model('users',usersSchema)

module.exports = model 