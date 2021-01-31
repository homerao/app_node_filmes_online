const customerRoute = require('express').Router()
const s3 = require('../../utils/s3bucket')




customerRoute.get('/menu', async (req, res) =>{
     let pageData = req.session.pageData
      res.render('customers/customermenu.hbs',pageData)
})
customerRoute.get('/my-subscription', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile.hbs',pageData)
})
customerRoute.get('/my-profile', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile.hbs',pageData)
})

customerRoute.get('/profile-edit', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile-edit.hbs',pageData)
})

customerRoute.get('/profile-update', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/avatar-edit', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/avatar-edit.hbs',pageData)
})

customerRoute.get('/avatar-update', async (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/customermenu.hbs',pageData)
})


module.exports = customerRoute