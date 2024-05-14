const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    createdQuizzes : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Quiz' 
    }],
    appearedQuizzes : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Quiz' 
    }]
})
const userModel = mongoose.model('User', userSchema)
module.exports = userModel