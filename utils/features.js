
const jwt = require('jsonwebtoken')

const sendCookies = (user, res, massege, statusCode = 201) => {

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        expire: new Date(Date.now() + 15 * 60 * 1000),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        massege
    })
}

module.exports = sendCookies