const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    // const token = req.header('Authorization')
    // if(!token){
    //     return res.status(401).json({"message": "Unauthorized User", "reason": "Token Unavailable"})
    // }
    // try {
    //     let decodedData = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
    //     console.log('Decoded data: ', decodedData)
    //     req.user = decodedData.user
    //     next()
    // } catch (error) {
    //     res.status(400).json({"message": "Login Invalidated, Try Logging in Again"})
    // }
    next()
}
module.exports = authenticateUser