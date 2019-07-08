const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: 'That email already exists',
    },
    password: { type: String, required: true },
    recipes: [{ type: mongoose.Schema.ObjectId, ref: 'Recipe' }],
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
