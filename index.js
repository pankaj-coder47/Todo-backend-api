const express = require('express')
const app = express();
const UseRouter = require('./routes/user');
const {config} = require('dotenv')

config({
    path:'./middleware/config.env'
})



//Using Middleware
app.use(express.json());
app.use("/users",UseRouter)

//Routes 
app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>")
})

module.exports = { app }