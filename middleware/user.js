
const mongoose = require('mongoose');
const connectDb = (url) =>{
    try {
        mongoose.connect(url,{
            dbName:"TodoBackend"
        })
        .then((e)=>console.log(`Connection is established on host ${e.connection.host}`))
        .catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connectDb }