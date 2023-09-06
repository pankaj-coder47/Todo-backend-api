const User = require("../models/user");
const jwt = require('jsonwebtoken')
const erroHandler = require('../utils/error1')

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
    if (!token) return next (new erroHandler("login first",400))
    const decoded = jwt.decode(token, process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded._id)
    next()
    } catch (error) {
        console.log("Error throw in IsAuthenticated : " + error)
    }
    
}

module.exports = isAuthenticated;