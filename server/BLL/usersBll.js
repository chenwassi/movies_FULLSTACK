const userModle = require('../Modle/userModle')

const getData = async  () => {
  return await  userModle.find({})  
}
module.exports = {getData}