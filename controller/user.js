const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendCookies = require("../utils/features");
const errorHandler = require("../utils/error1");



const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email })
        if (user) return next(errorHandler("User Allready Exists"))
        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create({ name, password: hashedPassword, email })
        sendCookies(user, res, 'success created', 201)
    } catch (error) {
        next(error)
    }


}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");

        if (!user) return res.status(404).json({
            success: false,
            massege: "Invalid email or password",
        })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return next(new errorHandler("Passwords do not match", 400))
        sendCookies(user, res, `Welcome Back to ${user.name}`, 200)
    } catch (error) {
        next(error)
    }
}



const getMyprofile = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        next(error);
    }

}
const logout = (req, res, next) => {
    try {
        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true
        }).json({
            success: true,
            massege: " successfully logged out",
        })
    } catch (error) {
        next(error);
    }

}


module.exports = { register, getMyprofile, login, logout }