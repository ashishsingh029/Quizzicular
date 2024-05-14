const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    text : {
        type: String,
        required: true,
    },
    options : [{
        type: String,
        required: true 
    }],
    correctOptions : [{
        type: Number,
        required: true 
    }]
})
const quizSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true
    },
    creatorName : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    questions : [questionSchema]
})
const quizModel = mongoose.model('Quiz', quizSchema)
module.exports = quizModel