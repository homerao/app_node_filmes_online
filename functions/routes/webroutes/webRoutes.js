const webRoutes = require('express').Router()
const authMiddleware = require('../../middlewares/AuthMiddleware')
const userWebRoutes = require('./userWebRoutes')
const homeRoutes = require('./homeRoutes')
const headers = require('../../middlewares/HeadersMiddleware')
//registrando as rotas do site 
webRoutes.use('/web/logged', authMiddleware, headers, userWebRoutes)
webRoutes.use('/',headers,homeRoutes)


module.exports = webRoutes