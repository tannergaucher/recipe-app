const express = require('../node_modules/express')
const router = express.Router()

const userController = require('../controllers/user-controller')

// TODO catch errors.
router.get('/', userController.test)
router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router
