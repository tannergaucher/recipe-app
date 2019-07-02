const express = require('../node_modules/express')
const router = express.Router()

// TODO MAKE INTO MODULES
const userController = require('../controllers/user-controller')
const recipeController = require('../controllers/recipe-controller')

// USER OR RECIPE CONTROLLER?
router.get('/', recipeController.allRecipes)
router.post('/', recipeController.createRecipe)

router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router
