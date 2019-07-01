const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.signup = (req, res, next) => {
  res.send('signup controller')
}

exports.login = (req, res, next) => {
  res.send('login controller')
}
