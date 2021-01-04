const customerRoute = require('express').Router()
const controller = require('../../webControllers/CustomerController')




customerRoute.get('/menu', async (req, res) =>{
     let pageData = req.body
      res.render('customers/customer-menu',pageData)
})


module.exports = customerRoute