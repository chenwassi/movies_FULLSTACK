const axios = require('axios')
const membersModel = require('../Modle/memberModle')

const getAllMember = async () => {
  const data = await membersModel.find({})
  const members = data.map((member) => {
     return {
       id:member._id,
       fullName:member.name,
       email:member.email,
       city:member.city
     };
   });
   return members;
 };
 
 const findByIndex =async (id)=>{
  const data = membersModel.findById(id)
  return data
 }
 const addMember = async (obj)=>{
  const data =new membersModel({
    name:obj.fullName,
    email:obj.email,
    city:obj.city
  })
  await data.save()
  return data
 }
 const deleteMember = async (id)=>{
  const data = await membersModel.findByIdAndDelete(id)
  return data
 }
 const EditMember = async (id,obj)=>{
  const data = await membersModel.findByIdAndUpdate(id,obj)
  return data
 }



module.exports ={getAllMember,findByIndex,addMember,deleteMember,EditMember}