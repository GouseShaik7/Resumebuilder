// STEP_1  Import Mongoose
const mongoose=require('mongoose')
// STEP_2 Create Schema
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel