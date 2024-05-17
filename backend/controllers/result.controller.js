const resultModel = require('../models/result.model')
const userModel = require('../models/user.model')
const addResult = async (req, res) => {
    // console.log("Result route", req.body)
    try {
        let res1 = await resultModel.create(req.body)
        console.log(res1)
        return { status: true, data: res1.data }
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to fetch results"})
    }
}
const addRefInUsers = async (req, res) => {
    let { quizId, userEmail } = req.body
    try {
        let user = await userModel.findOne({ email: userEmail })
        user.appearedQuizzes.push(quizId)
        await user.save()
        return { status: true}
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to Add in Appeared Quizzes"})
    }
}
module.exports = {
    addResult,
    addRefInUsers
}