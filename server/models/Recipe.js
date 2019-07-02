const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false },
    author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe
