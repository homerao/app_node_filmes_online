const apiIndexRouter = require('express').Router()
const apiActorRoutes = require('./ActorRoutes')
const apiAddressRoutes = require('./AddressRoutes')
const CategoryRouter = require('./CategoryRoutes')
const authMiddleware = require('../../middlewares/AuthMiddleware')

// rotas e middleware de autenticação
apiIndexRouter.use('/index/v1/actors',authMiddleware,apiActorRoutes)
apiIndexRouter.use('/index/v1/address',authMiddleware,apiAddressRoutes)
apiIndexRouter.use('/index/v1/categories',authMiddleware,CategoryRouter)


module.exports = apiIndexRouter