const express = require('express')
const {
    addResult,
    addRefInUsers
} = require('../controllers/result.controller')
const resultRouter = express.Router()
resultRouter.post('/addresult', addResult)
resultRouter.put('/addref', addRefInUsers)
module.exports = resultRouter