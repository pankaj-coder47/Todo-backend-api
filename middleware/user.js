
const mongoose = require('mongoose');
const connectDb = (url) =>{
    try {
        mongoose.connect(url,{
            dbName:"TodoBackend"
        })
        .then(()=>console.log("Connection is established"))
        .catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connectDb }