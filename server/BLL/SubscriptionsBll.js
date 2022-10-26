const SubscriptionModel = require('../Modle/SubscriptionsModle')

const SubscriptionsData = async () =>{
   return await SubscriptionModel.find({})
}

const addSubscription = async(obj)=>{
   const addSub = new SubscriptionModel({
      movieID:obj.movieID,
      memberID:obj.memberID,
      date:obj.date
   })
   await addSub.save()
   return 'created!'
}
module.exports = {SubscriptionsData,addSubscription}

