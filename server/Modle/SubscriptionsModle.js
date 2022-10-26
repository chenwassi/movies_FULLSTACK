const mongoose = require ('mongoose')

const SubscriptionsSchema = new mongoose.Schema({
    movieID:String,
    memberID:String,
    date:String
})
const model = mongoose.model('subscriptions',SubscriptionsSchema)
module.exports = model 