const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.signup = (req, res, next) => {
  const { email, name, password } = req.body
  // TODO: HASH THE PASSWORD
  const newUser = new User({ email, name, password })
  newUser
    .save()
    // TODO: send the token along in a cookie
    .then(() => res.json('New user added'))
    .catch(err => res.status(400).json(`Error: ${err.message}`))
}

exports.login = (req, res, next) => {
  res.send('login controller')
}
