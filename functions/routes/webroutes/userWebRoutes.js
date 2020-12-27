const webRoute = require('express').Router()
const homeRoutes = require('./homeRoutes')

webRoute.use(homeRoutes)

module.exports = webRoute