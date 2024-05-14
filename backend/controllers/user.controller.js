const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const loginUser = async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await userModel.findOne({ email })
        if(!user) {
            return res.status(404).json({"message": "Email does not exist"})
        }
        console.log('Loggedin user: ', user)
        let isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword) {
            return res.status(400).json({"message": "Invalid Password"})
        }
        // randomQuizId = new mongoose.Types.ObjectId()
        // console.log(randomQuizId)
        // user.appearedQuizzes.push(randomQuizId)
        // await user.save()
        console.log("A value saved to the databse")
        let token = jwt.sign(
            { user: { name: user.name, email: user.email }}, process.env.JWT_SECRET, { expiresIn: '20 minutes' }
        )
        // console.log('Generated token: ', token)
        res.status(200).json({"message": "Login Successfull", token})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
const addUser = async (req, res) => {
    // console.log(req.body)
    let { name, email, password } = req.body
    try {
        let user = await userModel.findOne({ email: email })
        if(user) {
            return res.status(400).json({"message": "Email is already taken"})
        }
        let salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
        console.log("Hashed Password: " , password)
        user = await userModel.create({
            name, email, password
        })
        res.status(201).json(user)
    } catch (error) {
        console.log("Signup Failed", error)
        return res.status(200).json({"message": "Signup Failed"})
    }
    // res.status(200).json({"message": "User Register Contoller"})
}
module.exports = {
    loginUser,
    addUser
}