const mongoose =require ('mongoose')

const memberSchema =new mongoose.Schema({
    name:String,
    email:String,
    city:String
})

const model = mongoose.model('members',memberSchema)
module.exports=model