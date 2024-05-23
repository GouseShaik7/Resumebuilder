const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    place:String,
    education:String,
    skills:String,
    project:String,
    certification:String,
    declaration:String
})
const userData=mongoose.model('userdata',userSchema)
module.exports=userData 