const animeController = require('../controllers/animeControllers')


const Router = require('express').Router

const router = new Router()

router.post('/register', animeController.register)
router.post('/login', animeController.login)
router.post('/logoute', animeController.logoute)
router.post('/create', animeController.animeCreate)
router.get('/animeList', animeController.animeList)

module.exports = router