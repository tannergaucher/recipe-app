const express = require('./node_modules/express')
const mongoose = require('mongoose')

require('./node_modules/dotenv/lib/main').config({ path: 'variables.env' })

// Connect to database and handle errors

mongoose.connect(process.env.DATABASE)

mongoose.connection.on('error', err => console.error(err.message))

// import all models
require('./models/User')

const app = require('./app')

app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`)
})
