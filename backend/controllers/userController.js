import User from "../models/userModel.js";

export const getUsersForSidebar=async (req,res)=>{
    try {

        const loggedInUser=req.user._id;
        const u=await User.find({_id:{$ne:loggedInUser}}).select("-password");
        res.status(200).json(u);
        
    } catch (e) {
       res.status(500).json({error:e.message}) 
    }
}