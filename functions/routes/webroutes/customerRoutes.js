const customerRoute = require('express').Router()





customerRoute.get('/menu', async (req, res) =>{
     let pageData = req.body
      res.render('customers/customermenu.hbs',pageData)
})


module.exports = customerRoute