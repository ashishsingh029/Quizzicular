const quizModel = require('../models/quiz.model')
const userModel = require('../models/user.model')
const resultModel = require('../models/result.model')
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
        return res.status(200).json({"quizId": `${newQuizIdToBePushed}`, "password": `${res1.password}`})
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
    let { qid, password} = req.body
    try {
        let result = await quizModel.findOne({_id: qid})
        // console.log("Result ", result)
        if(!result) {
            return res.status(404).json({"message": "No Quiz found"})
        }
        if(result.password != password) {
            return res.status(400).json({"message": "Invalid Password"})
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
const submitQuiz = async (req, res) => {
    // console.log(selectedOptions)
    // console.log(req.body)
    let { qid, selectedOptions } = req.body.data
    let { email } = req.body
    // console.log("email in submit quiz controller, " , email)
    // console.log(qid)
    // console.log("Selected Options ", selectedOptions)
    try {
        let user = await userModel.findOne({ email })
        // console.log(user)
        user.appearedQuizzes.push(qid)
        await user.save()
        let quiz = await quizModel.findOne({_id: qid})
        let questions = quiz.questions
        console.log(selectedOptions)
        console.log(questions)
        let correct = 0;
        let total = questions.length;
        for(let i=0;i<total;i++) {
            const arrCorrect = questions[i].correctOptions
            const arrUser = selectedOptions[i]
            // console.log("Correct answers", arrCorrect)
            // console.log("User answers", arrUser)
            if(arrUser.sort((a, b) => a - b).toString() === arrCorrect.sort((a, b) => a - b).toString()) {
                correct++;
            }
        }
        const resp = { "correct": correct, "total": total }
        // console.log(resp)
        // console.log("Printing result from controller", resp)
        return res.status(200).json({ "correct": correct, "total": total })
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Result calculation Failed"})
    }
}
module.exports = {
    createQuiz,
    getQuiz,
    takeQuiz,
    submitQuiz
}