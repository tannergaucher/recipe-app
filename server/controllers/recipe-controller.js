const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')

exports.createRecipe = (req, res, next) => {
  console.log(req.body)
  const { name, description } = req.body
  //   TODO: Relate recipe to user
  const newRecipe = new Recipe({ name, description })

  newRecipe
    .save()
    .then(() => res.json('New Recipe Added'))
    .catch(err => res.status(400).json(`Error: ${err.message}`))
}

exports.allRecipes = (req, res, next) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err.message}`))
}
