const moviesModel = require("../Modle/movieModle");

const moviesData = async()=>{
    return await moviesModel.find({})
}

const getbyId = async(id)=>{
 return await moviesModel.findById(id) 
}

const editMovie = async (id,obj)=>{
    const data = moviesModel.findByIdAndUpdate(id,obj)
    await data
    return 'changed!'
 
 }

 const deleteMovie = async(id) =>{
    const data = moviesModel.findByIdAndDelete(id)
    return data 
 }
 const addMovie =async(obj)=>{
    const createNewMovie = new moviesModel({
        name:obj.name,
        year_premiered:obj.year_premiered,
        genres:[...obj.genres],
        image:obj.image
    })
    await createNewMovie.save()
    return 'created!'
 }
 

module.exports={moviesData,editMovie,getbyId,deleteMovie,addMovie}
