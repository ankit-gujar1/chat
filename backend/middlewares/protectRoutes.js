import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoutes = async (req, res, next) => {
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error: "Unauthorized - No Token Provided"});
        }

        const decode=jwt.verify(token, process.env.SECRET);
        if (!decode) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

        const user=await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(401).json({ error: "Unauthorized - Invalid Token"});
        }

        req.user=user;
        next();

        
    } catch (e) {
        res.status(401).json({ error: e.message });
    }
}

export default protectRoutes;