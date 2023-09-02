
const mongoose = require('mongoose');
const connectDb = (url) =>{
    mongoose.connect(url,{
        dbName:"TodoBackend"
    })
    .then(()=>console.log("Connection is established"))
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = { connectDb }