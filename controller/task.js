const { errorMiddleware } = require("../middleware/error");
const Task = require("../models/task");
const errorHandler = require("../utils/error1");



const createTask = async (req, res, next) => {
    try {
        const { title, descripation } = req.body;
        await Task.create({ title, descripation, user: req.user });
        res.status(201).json({
            success: true,
            massege: "Task created successfully"
        })
    } catch (error) {
        next(error);
    }

}

const fetchTask = async (req, res, next) => {
    try {
        const userid = req.user._id;
        const todo = await Task.find({ user: userid });
        res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        next(error);
    }

}
const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        task.isCompleted = !task.isCompleted;
        await task.save();
        res.status(200).json({
            success: true,
            massege: "Task updated successfully"
        })
    } catch (error) {
        next(error);
    }


}
const deleteTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new errorHandler("Class is Worked", 404));
    await task.deleteOne();
    res.status(200).json({
        success: true,
        massege: "Task deleted successfully"
    })

}

module.exports = { createTask, fetchTask, deleteTask, updateTask }