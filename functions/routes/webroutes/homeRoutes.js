const homeRoutes = require('express').Router()
const filmes = require('../../mock-data/sample-data')
const customerController = require('../../webControllers/CustomerController')
let data = null
homeRoutes.get('/index', (req, res)=>{
    checkLoged(req ,res)
      res.render('homepages/index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/home', (req, res)=>{
  
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/login', (req, res)=>{
  checkLoged(req ,res)
 
    res.render('homepages/account/login.hbs', data)
})

homeRoutes.get('/logoff', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/account/login.hbs', data)
})

homeRoutes.get('/planos', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/planos.hbs', data)
})

homeRoutes.get('/teams', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/desenvolvedores.hbs', data)
})

homeRoutes.get('/filmes', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/filmes.hbs', data)
})

homeRoutes.get('/cadastro', (req, res)=>{
  checkLoged(req ,res)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/account/cadastro.hbs', data)
})

homeRoutes.post('/authentication',  (req, res)=>{
   customerController.login(req, res)
})

homeRoutes.post('/new-customer', async (req, res)=>{
  
  customerController.save(req, res)
})

homeRoutes.get('/email-confirmation', async (req, res)=>{
   res.render('homepages/account/email-confirmation.hbs')
})

homeRoutes.get('/password-request-form', async (req, res)=>{
  res.render('homepages/account/request-password.hbs')
})

homeRoutes.get('/password-request', async (req, res)=>{
  
})

const checkLoged = (req ,res) =>{
  if(req.headers.authorization != undefined){
     data = {title:'Home', userlogged:true, customer:true}
  } else {
     data = {title:'Home', userlogged:false}
  }
}


module.exports = homeRoutes