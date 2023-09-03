const mongoose = require('mongoose');

const scheame = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    descripation:{
        type: String,
        required:true,
    },
    isCompleted: {
        type: Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model('Task', scheame)

module.exports = Task;