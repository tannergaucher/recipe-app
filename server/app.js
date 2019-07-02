const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const routes = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/', routes)

module.exports = app
