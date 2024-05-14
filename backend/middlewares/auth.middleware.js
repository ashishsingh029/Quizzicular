// const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    // const token = req.header('Authorization')
    // console.log('Fetching token from header', token)
    // if(!token){
    //     return res.status(401).json({"message": "Unauthorized User"})
    // }
    // try {
    //     let decodedData = jwt.verify(token, process.env.JWT_SECRET)
    //     console.log('Decoded data: ', decodedData)
    //     req.user = decodedData.admin
    //     next()
    // } catch (error) {
    //     res.status(400).json({"message": "Invalid Token"})
    // }
    next()
}
module.exports = authenticateUser