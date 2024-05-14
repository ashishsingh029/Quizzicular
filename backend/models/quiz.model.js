const mongoose = require('mongoose')
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
    questions : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    }]
})
const quizModel = mongoose.model('Quiz', quizSchema)
module.exports = quizModel