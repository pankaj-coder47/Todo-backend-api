const express = require('express')
const app = express();
const UseRouter = require('./routes/user');
const UseTask = require('./routes/task');
const { config } = require('dotenv')
const cookieParser = require('cookie-parser');
const { errorMiddleware } = require('./middleware/error');
const cors = require('cors')


config({
    path: './middleware/config.env'
})



//Using Middleware
app.use(cors({
    origin: 'https://todo-frontend-livid-mu.vercel.app/' || process.env.FRONTEND_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());//use always top of router
app.use(cookieParser());// use cookies parser for access cookies

// Using Routes
app.use("/api/v1/users", UseRouter)///api/v1 routes for like know for this is api version 1
app.use("/api/v1/task", UseTask)




//Routes 
app.get('/', (req, res) => {
    res.send("<h1> Welcome to my your api </h1>")
})

app.use(errorMiddleware);//Error middleware Use as next parameter

module.exports = { app }