const mongoose = require('mongoose');

const scheame = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        select:false,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', scheame)

module.exports = User