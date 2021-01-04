const webRoutes = require('express').Router()
const authMiddleware = require('../../middlewares/AuthMiddleware')
const userWebRoutes = require('./userWebRoutes')
const headers = require('../../middlewares/HeadersMiddleware')
const customerRoutes = require('./customerRoutes')
//registrando as rotas do site 
webRoutes.use('/actors', authMiddleware, headers, userWebRoutes)
webRoutes.use('/customers', authMiddleware, headers, customerRoutes)


module.exports = webRoutes