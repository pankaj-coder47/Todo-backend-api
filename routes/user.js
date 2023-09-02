const express = require('express');
const User = require('../models/user.js');
const { getAllusers, postUsers, getUserById, UpdateUserbyId, deleteUserbyId } = require('../controller/user.js');
const router = express.Router();


router.get('/all', getAllusers)
router.post('/api', postUsers)
router.route('/:Userid').get(getUserById).put(UpdateUserbyId).delete(deleteUserbyId)



module.exports = router;