const express = require ('express')
const usersBll = require('../Bll/usersBll')
const router = express.Router()

router.get('/',async(req,res)=>{
    const data = await usersBll.getData()
    console.log(data);
    res.json(data)
})



module.exports = router
