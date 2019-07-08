const { hash } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.signup = async (req, res, next) => {
  try {
    const { email, name, password } = req.body
    const hashedPassword = await hash(password, 10)
    const newUser = await new User({
      email,
      name,
      password: hashedPassword,
    }).save()

    res.status(200).json({ token })
  } catch (error) {
    res.status(400).json({ error })
  }
}

exports.login = (req, res, next) => {
  res.send('login controller')
}
