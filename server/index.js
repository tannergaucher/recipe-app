const mongoose = require('mongoose')

require('dotenv').config({ path: 'variables.env' })

// Connect to database and handle errors
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
})

mongoose.connection.on('error', err => console.error(err.message))

// import all models
require('./models/User')
require('./models/Recipe')

const app = require('./app')

app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`)
})
