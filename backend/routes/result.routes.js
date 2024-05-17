const express = require('express')
const {
    addResult,
    addRefInUsers,
    getAppearedQuizzes
} = require('../controllers/result.controller')
const resultRouter = express.Router()
resultRouter.post('/addresult', addResult)
resultRouter.post('/addref', addRefInUsers)
resultRouter.get('/getappeared/:email', getAppearedQuizzes)
module.exports = resultRouter