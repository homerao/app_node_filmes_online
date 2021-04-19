const customerRoute = require('express').Router()
const s3 = require('../../utils/s3bucket')
const webAuthMiddleware = require('../../middlewares/WebAuthMiddleware')



customerRoute.get('/menu',webAuthMiddleware,  (req, res, next) =>{
     
      let session = req.session
      console.log(session)
     let pageData = session.pageData
      res.render('customers/customermenu.hbs',pageData)
})
customerRoute.get('/my-subscription', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile.hbs',pageData)
})
customerRoute.get('/my-profile',webAuthMiddleware,  (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile.hbs',pageData)
})



customerRoute.get('/profile-edit', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile-edit.hbs',pageData)
})

customerRoute.get('/profile-update', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/customermenu.hbs',pageData)
})

customerRoute.get('/avatar-edit',webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/avatar-edit.hbs',pageData)
})

customerRoute.get('/avatar-update', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/customermenu.hbs',pageData)
})


module.exports = customerRoute