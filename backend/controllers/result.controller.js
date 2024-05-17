const resultModel = require('../models/result.model')
const userModel = require('../models/user.model')
const addResult = async (req, res) => {
    // console.log("Result route", req.body)
    let result = req.body
    console.log("Add result called", result)
    try {
        let res1 = await resultModel.create(req.body)
        // console.log("Completed adding result ", res1)
        return { status: true }
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to fetch results"})
    }
}
const addRefInUsers = async (req, res) => {
    let { quizId, userEmail } = req.body
    console.log(req.body)
    try {
        let lead = await userModel.findOne({ email: userEmail })
        const quizObjectId = mongoose.Types.ObjectId(quizId)
        // Update the appearedQuizzes array
        console.log("pushing")
        lead.appearedQuizzes.push(quizObjectId);
        // Save the user
        await lead.save();
        console.log("Completed adding ref");
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message": "Unable to Add in Appeared Quizzes"})
    }
}
// const getAppearedQuizzes = async (req, res) => {
//     let { email } = req.useParams()
//     console.log("Fetching records of past quizzes by email", email)
//     try {
//         let res1 = await resultModel.find({ userEmail: email })
//         console.log("Fetching quizzes", res1)
//         return { status: true }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({"message": "Unable to get Appeared Quizzes"})
//     }
// }
const getAppearedQuizzes = async (req, res) => {
    let { email } = req.params
    // console.log("Fetching records of past quizzes by email", email)
    try {
        let results = await resultModel.find({ userEmail: email })
        // console.log("Fetched quizzes", results)
        if(results.length == 0) {
            return res.status(404).json({ message: "No Appeared Quizzes" })
        }
        return res.status(200).json({ status: true, quizzes: results })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Unable to get Appeared Quizzes" })
    }
}
module.exports = {
    addResult,
    addRefInUsers,
    getAppearedQuizzes
}