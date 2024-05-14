const mongoose = require('mongoose')
const dbConnect = async () => {
    const DB_URL = process.env.DB_URL
    const DB_NAME = process.env.DB_NAME
    try {
        await mongoose.connect(DB_URL + DB_NAME)
    } catch (error) {
        console.log('Database Error: ' + error)
    }
}
mongoose.set('strictQuery', true)
module.exports = dbConnect