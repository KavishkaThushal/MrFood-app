import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config()
const createToken=(id)=>{
    const token=jwt.sign({id},process.env.JWT_SECRET);
    return token;
}

export const SignUp = async (req, res) => {
    const {username,email,address,mobilenumber,postalcode,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists",success:false});
        }
        
        const salt=await bcrypt.genSalt(12);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=new User({username,email,address,mobilenumber,postalcode,password:hashedPassword});
        await newUser.save();
        const token=createToken(newUser._id);
        res.cookie('access_token',token,{httpOnly:true}).status(201).json({message:"User registered",success:true,token})
        
    } catch (error) {
        console.log(error);
    }
}

export const SignIn = async (req, res) => {
    const {email,password}=req.body;
    
    try{
        const user=await User.findOne({email})
        if(!user)return res.status(400).json({message:"User does not exist",success:false});

        const isPassword=await bcrypt.compare(password,user.password);
        if(!isPassword)return res.status(400).json({message:"Invalid credentials",success:false});

        const token=createToken(user._id);
        res.cookie('access_token',token,{httpOnly:true}).status(200).json({message:"User logged in",success:true,token})

    } catch (error) {
        res.status(500).json({message:"Server Error",success:false});
    }
}