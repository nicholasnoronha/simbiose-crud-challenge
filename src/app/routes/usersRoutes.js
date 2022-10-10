const { Router } = require('express')

const UserController = require('../controllers/UserControler')
const router = Router()

router.get('/pessoas', UserController.getUsers)
router.get('/pessoa/:id', UserController.getUser)
router.post('/pessoa', UserController.postUser)

module.exports = router
