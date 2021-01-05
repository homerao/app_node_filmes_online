const apiIndexRouter = require('express').Router()
const apiActorRoutes = require('./ActorRoutes')
const apiAddressRoutes = require('./AddressRoutes')
const CategoryRouter = require('./CategoryRoutes')
const authMiddleware = require('../../middlewares/ApiAuthMiddleware')
const headers = require('../../middlewares/HeadersMiddleware')

// rotas e middleware de autenticação
apiIndexRouter.use('/index/v1/auth/actors',authMiddleware, headers,apiActorRoutes)
apiIndexRouter.use('/index/v1/auth/addresses',authMiddleware, headers, apiAddressRoutes)
apiIndexRouter.use('/index/v1/auth/categories',authMiddleware, headers, CategoryRouter)



module.exports = apiIndexRouter