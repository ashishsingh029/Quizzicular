const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    text : {
        type: String,
        required: true,
    },
    options : [{
        type: Number,
        required: true 
    }],
    correctOptions : [{
        type: Number,
        required: true 
    }]
})
const questionModel = mongoose.model('Question', questionSchema)
module.exports = questionModel