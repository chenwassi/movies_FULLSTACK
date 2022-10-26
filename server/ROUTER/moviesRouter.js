const express = require ('express')
const moviesBll = require('../BLL/movieBll')
const SubscriptionsBll = require('../BLL/SubscriptionsBll')
const router = express.Router()

router.get('/',async(req,res)=>{
    const movieData = await moviesBll.moviesData()
    res.json(movieData)
})

router.get('/subscription',async(req,res)=>{
    const Subscriptions = await SubscriptionsBll.SubscriptionsData()
    console.log(Subscriptions);
    res.json(Subscriptions)
})
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const dataId = await moviesBll.getbyId(id);
    res.json(dataId)
})

router.put('/:id', async(req,res)=>{
    const obj = req.body
    const id = req.params.id
    const editedMovie = await moviesBll.editMovie(id,obj)
    res.json(editedMovie) 
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const deleteObj = await moviesBll.deleteMovie(id)
    res.json(deleteObj)
})
router.post('/',async(req,res)=>{
    const obj = req.body
    const newMovie = moviesBll.addMovie(obj)
    res.json(newMovie)
})

module.exports = router
