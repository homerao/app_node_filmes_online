const apiIndexRouter = require('express').Router()
const apiActorRoutes = require('./ActorRoutes')
const apiAddressRoutes = require('./AddressRoutes')
const CategoryRouter = require('./CategoryRoutes')


apiIndexRouter.use('/index/v1/actors',apiActorRoutes)
apiIndexRouter.use('/index/v1/address',apiAddressRoutes)
apiIndexRouter.use('/index/v1/categories',CategoryRouter)


module.exports = apiIndexRouter