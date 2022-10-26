const MembersBll = require('../BLL/MembersBll')
const express = require ('express')
const router = express.Router()

router.get('/', async(req,res)=>{
    const Members = await MembersBll.getAllMember()
    res.json(Members)
})
router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const Members = await MembersBll.findByIndex(id)
    res.json(Members)
})

router.post('/',async(req,res)=>{
    const obj = req.body
    const NewMember = await MembersBll.addMember(obj)
    res.json(NewMember)
})
router.delete('/:id' ,async(req,res)=>{
    const {id} = req.params
    const memberDelete = MembersBll.deleteMember(id)
    res.json(memberDelete)
})
router.put('/:id',async(req,res)=>{
    const {id} =req.params
    const obj = req.body
    const editMember = MembersBll.EditMember(id,obj)
    res.json(editMember)
})


module.exports = router
