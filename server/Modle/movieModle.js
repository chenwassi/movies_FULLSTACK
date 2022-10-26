const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    name:String, 
    year_premiered:String,
    genres:[String],
    image :String,
})
const model = mongoose.model('movies',moviesSchema)
module.exports = model