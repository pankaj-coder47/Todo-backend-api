const express = require('express')
const app = express();
const UseRouter = require('./routes/user');
const {config} = require('dotenv')
const cookieParser = require('cookie-parser')

config({
    path:'./middleware/config.env'
})



//Using Middleware
app.use(express.json());//use always top of router
app.use(cookieParser());// use cookies parser for access cookies

// Using Routes
app.use("/api/v1/users",UseRouter)///api/v1 routes for like know for this is api version 1

//Routes 
app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>")
})

module.exports = { app }