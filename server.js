const { app } = require('./index')
const { connectDb } = require('./middleware/user')

//Global Variables
const port = process.env.PORT || 3000
const url = process.env.MONGO_URI;

connectDb(url)

app.listen(port, () => {
    console.log("Server is Working")
})