import mongoose from "mongoose";


const cartSchema=new mongoose.Schema({
    totalprice:{
        type:Number,
        required:true,
    },
    products:{
        type:Array,
        required:true,
    },
    userid:{
        type:String,
        required:true,
    },
    
})

const Cart=mongoose.model('Cart',cartSchema)
export default Cart