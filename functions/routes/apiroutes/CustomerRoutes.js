const routes = require('express').Router()
const customerController = require('../../controllers/resourceControllers/CustomerController')


routes.get('/customers/id', (req, res)=>{
    let id = req.query.id
    customerController.findById(id)
})