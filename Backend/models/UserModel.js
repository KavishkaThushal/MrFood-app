import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    mobilenumber:{
        type:String,
        required:true,
    },
    postalcode:{
        type:String,
        required:true,
    },
    

})

const User=mongoose.model('User',userSchema)
export default User