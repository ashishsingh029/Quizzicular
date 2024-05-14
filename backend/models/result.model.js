const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    quizId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userEmail : {
        type: String,
        required: true 
    },
    correct : {
        type: Number,
        required: true 
    },
    total : {
        type: Number,
        required: true 
    }
})
const resultModel = mongoose.model('Result', resultSchema)
module.exports = resultModel