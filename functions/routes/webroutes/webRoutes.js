const webRoutes = require('express').Router()
const authMiddleware = require('../../middlewares/AuthMiddleware')
const userWebRoutes = require('./userWebRoutes')
const homeRoutes = require('./homeRoutes')
//registrando as rotas do site 
webRoutes.use('/web/logged', authMiddleware, userWebRoutes)
webRoutes.use(homeRoutes)


module.exports = webRoutes