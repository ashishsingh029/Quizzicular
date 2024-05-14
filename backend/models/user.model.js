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
        required: true 
    }],
    appearedQuizzes : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    }]
})
const userModel = mongoose.model('User', userSchema)
module.exports = userModel