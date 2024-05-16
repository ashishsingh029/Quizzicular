const express = require('express')
const quizRouter = express.Router()
const {
    createQuiz,
    getQuiz,
    takeQuiz,
    submitQuiz
} = require('../controllers/quiz.controller') 
quizRouter.post('/createquiz', createQuiz)
quizRouter.get('/getquiz', getQuiz)
quizRouter.post('/takequiz', takeQuiz)
quizRouter.post('/submitquiz', submitQuiz)
module.exports = quizRouter