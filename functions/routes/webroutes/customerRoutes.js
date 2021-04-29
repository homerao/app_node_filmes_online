const customerRoute = require('express').Router()
const s3 = require('../../utils/s3bucket')
const webAuthMiddleware = require('../../middlewares/WebAuthMiddleware')
const CustomerController = require('../../controllers/webControllers/CustomerController')
const AddressController = require('../../controllers/resourceControllers/AddressController')



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

customerRoute.get('/disable-account', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/disable-account.hbs',pageData)
})
customerRoute.get('/security', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/security.hbs',pageData)
})

customerRoute.get('/subscription', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/subscription.hbs',pageData)
})
customerRoute.get('/avatar', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/avatar-edit.hbs',pageData)
})

customerRoute.get('/address', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/address.hbs',pageData)
})

customerRoute.get('/update-address', webAuthMiddleware,()=>{
      let address = {address_id:req.session.pageData.user.address_id,...req.body}
      req.address = address
      AddressController.update(req, res)
} )

customerRoute.get('/my-data', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
       res.render('customers/profile.hbs',pageData)
})

customerRoute.get('/profile-edit', webAuthMiddleware, (req, res) =>{
      let pageData = req.session.pageData
      console.log('profile edit, data'+pageData)
       res.render('customers/profile.hbs',pageData)
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