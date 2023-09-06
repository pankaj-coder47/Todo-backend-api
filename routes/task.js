const express = require('express');
const { createTask, fetchTask, updateTask, deleteTask } = require('../controller/task');
const isAuthenticated = require('../auth/authenticator');
const router =express.Router();


router.post('/new',isAuthenticated,createTask)
router.get('/alltask',isAuthenticated,fetchTask)
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)


module.exports = router;