const User = require("../models/user");
const jwt = require('jsonwebtoken')


const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
    if (!token) return res.status(404).json({
        success: false,
        massege: "Login first",
    })
    const decoded = jwt.decode(token, process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded._id)
    next()
    } catch (error) {
        console.log("Error throw in IsAuthenticated : " + error)
    }
    
}

module.exports = isAuthenticated;