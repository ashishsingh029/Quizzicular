const express = require('express')
const userRouter = express.Router()
const {
    loginUser,
    addUser
} = require('../controllers/user.controller')
userRouter.post('/login', loginUser)
userRouter.post('/signup', addUser)
module.exports = userRouter