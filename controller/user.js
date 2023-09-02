const User = require("../models/user");

const getAllusers =  async (req, res) => {
    const user = await User.find({});
    res.json({
        success: true,
        user
    })
}

const postUsers = async (req, res) => {
    const { email, password, name } = req.body;//request from frontend body
    //crate database user data
    const createuser = await User.create({ email, password, name });
    res.status(201).json({
        success: true,
        Massege: 'registered is now registered'
    })
}




const getUserById = async(req,res) => {
    const  {Userid}  = req.params;
    const user = await User.findById(Userid)  
    res.json({ 
        success: true, 
        user
    })
}
const UpdateUserbyId = async(req,res) => {
    const  {Userid}  = req.params;
    const user = await User.findById(Userid)
  
    res.json({ 
        success: true, 
        Massege:"User data updated successfully"
    })
}
const deleteUserbyId = async(req,res) => {
    const  {Userid}  = req.params;
    const user = await User.findById(Userid)
    await user.deleteOne({Userid});
  
    res.json({ 
        success: true, 
        Massege:"User data deleted successfully"
    })
}

module.exports = {getAllusers,postUsers,getUserById,UpdateUserbyId,deleteUserbyId}