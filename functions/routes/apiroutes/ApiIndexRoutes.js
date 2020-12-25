const apiIndexRouter = require('express').Router()
const apiActorRoutes = require('./actorRoutes')
const apiAddressRoutes = require('./AddressRoutes')
const CategoryRouter = require('./CategoryRoutes')

apiIndexRouter.use('/api/index/v1/actors',apiActorRoutes)
apiIndexRouter.use('/api/index/v1/address',apiAddressRoutes)
apiIndexRouter.use('/api/index/v1/categories',CategoryRouter)


module.exports = apiIndexRouter