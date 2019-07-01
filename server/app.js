const express = require('./node_modules/express')
const cookieParser = require('./node_modules/cookie-parser')
const bodyParser = require('./node_modules/body-parser')

const routes = require('./routes/index')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/', routes)

module.exports = app
