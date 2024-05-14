const express = require('express')
const quizRouter = express.Router()
const {
    createQuiz,
    getQuiz
} = require('../controllers/quiz.controller') 
quizRouter.post('/createquiz', createQuiz)
quizRouter.get('/getquiz', getQuiz)
quizRouter.post('/takequiz', takeQuiz)
module.exports = quizRouter