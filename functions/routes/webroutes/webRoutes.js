const webRoutes = require('express').Router()
const WebauthMiddleware = require('../../middlewares/WebAuthMiddleware')
const userWebRoutes = require('./userWebRoutes')
const headers = require('../../middlewares/HeadersMiddleware')
const customerRoutes = require('./customerRoutes')
//registrando as rotas do site 
webRoutes.use('/actors',headers, userWebRoutes)
webRoutes.use('/customers',  headers, customerRoutes)


module.exports = webRoutes