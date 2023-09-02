const mongoose = require('mongoose');

const scheame = new mongoose.Schema({
    name: String,
    email:String,
    password: String
})

const User = mongoose.model('User', scheame)

module.exports = User