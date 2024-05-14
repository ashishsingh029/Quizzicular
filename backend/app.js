const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db.config')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5101
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send('<h1>Quizzicular api</h1>')
})
dbConnect()
app.listen(PORT)