const SubscriptionsBll = require('../BLL/SubscriptionsBll')
const express = require ('express')
const router = express.Router()

router.get('/', async(req,res)=>{
    const Subscriptions = await SubscriptionsBll.SubscriptionsData()
    res.json(Subscriptions)
})
router.post('/',async(req,res)=>{
    const obj = req.body
    const AddSubscriptions = await SubscriptionsBll.addSubscription(obj)
    res.json(AddSubscriptions)
})

module.exports = router
