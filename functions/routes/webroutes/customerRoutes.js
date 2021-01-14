const customerRoute = require('express').Router()
const s3 = require('../../utils/s3bucket')




customerRoute.get('/menu', async (req, res) =>{
     let pageData = req.body
      res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/my-profile', async (req, res) =>{
      let pageData = req.body
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/profile-edit', async (req, res) =>{
      let pageData = req.body
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/profile-update', async (req, res) =>{
      let pageData = req.body
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/avatar-edit', async (req, res) =>{
      let pageData = req.body
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/avatar-update', async (req, res) =>{
      let pageData = req.body
       res.render('customers/customermenu.hbs',pageData)
})


module.exports = customerRoute