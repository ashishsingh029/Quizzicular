const quizModel = require('../models/quiz.model')
const userModel = require('../models/user.model')
const createQuiz = async (req, res) => {
    console.log(req.body)
    // console.log(questions)
    const email = "test1@email.com"
    try {
        let res1 = await quizModel.create(req.body)
        let newQuizIdToBePushed = res1._id
        let user = await userModel.findOne({ email })
        // console.log(user)
        user.createdQuizzes.push(newQuizIdToBePushed)
        await user.save()
        return res.status(200).json({"Quiz Id": `${newQuizIdToBePushed}`, "password": `${res1.password}`})
    } catch (error) {
        console.log('Error creating Quiz', error)
        return res.status(500).json({"message": "Can't create Quiz"})
    }
}
const getQuiz = async (req, res) => {
    let qid = "66437ee5ff3e5459e6898f70"
    try {
        let result = await quizModel.findOne({_id: qid})
        console.log(result)
        return res.status(400).json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({"message": "Quiz not found"})
    }
}
const takeQuiz = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createQuiz,
    getQuiz,
    takeQuiz
}