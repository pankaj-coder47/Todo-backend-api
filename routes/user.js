const express = require('express');
const User = require('../models/user.js');
const { register,getMyprofile,login,logout} = require('../controller/user.js');
const isAuthenticated = require('../auth/authenticator.js');
const router = express.Router();


router.get('/me',isAuthenticated, getMyprofile)
router.post('/register',register)
router.post('/login', login)
router.get('/logout',isAuthenticated,logout)



module.exports = router;