import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const TokenVerify = (req, res, next) => {
        const token=req.headers.authorization;

        if(!token)return res.status(401).json({message:"Unauthorized",success:false});
        try {
            const tokenVerify=jwt.verify(token,process.env.JWT_SECRET);

            if(!tokenVerify)return res.status(401).json({message:"Unauthorized",success:false});

            req.userId=tokenVerify.id;
        } catch (error) {
            res.status(500).json({message:"Server Error",success:false});
        }
}