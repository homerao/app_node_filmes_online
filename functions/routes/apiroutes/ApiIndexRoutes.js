const apiIndexRouter = require('express').Router()
const apiActorRoutes = require('./ActorRoutes')
const apiAddressRoutes = require('./AddressRoutes')
const CategoryRouter = require('./CategoryRoutes')
const authMiddleware = require('../../middlewares/AuthMiddleware')
const headers = require('../../middlewares/HeadersMiddleware')
// rotas e middleware de autenticação
apiIndexRouter.use('/index/v1/actors',authMiddleware, headers,apiActorRoutes)
apiIndexRouter.use('/index/v1/address',authMiddleware, headers,apiAddressRoutes)
apiIndexRouter.use('/index/v1/categories',authMiddleware, headers,CategoryRouter)


module.exports = apiIndexRouter