const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendCookies = require("../utils/features");



const register = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email })

    if (user) return res.status(404).json({
        success: false,
        massege: "user allready exists",
    })
    const hashedPassword = await bcrypt.hash(password, 10)
    user = await User.create({ name, password: hashedPassword, email })

    sendCookies(user, res, 'success created', 201)
    

}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({
        success: false,
        massege: "Invalid email or password",
    })

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({
        success: false,
        massege: "Invalid password does not match",
    })

    sendCookies(user,res,`Welcome Back to ${user.name}` ,200)

}



const getMyprofile =  (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
}
const logout =  (req, res) => {
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now())
    }).json({
        success: true,
        massege:" successfully logged out",
    })
}


module.exports = { register, getMyprofile, login,logout}