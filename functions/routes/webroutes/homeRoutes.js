const homeRoutes = require('express').Router()
const filmes = require('../../mock-data/sample-data')
const customerController = require('../../webControllers/CustomerController')

homeRoutes.get('/index', (req, res)=>{
    
let  session = req.session
let  pageData = session.pageData
      res.render('homepages/index.hbs', pageData)
})

homeRoutes.get('/', (req, res)=>{
let  session = req.session
let  pageData = session.pageData
  console.log(session)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', pageData)
})

homeRoutes.get('/home', (req, res)=>{
  
let  session = req.session
let  pageData = session.pageData
  console.log("Sessão na home "+session)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', pageData)
})

homeRoutes.get('/login', (req, res)=>{
let  session = req.session
let  pageData = session.pageData
  
    res.render('homepages/account/login.hbs', pageData)
})

homeRoutes.get('/logoff', (req, res)=>{
  
  req.session.destroy()
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/account/login.hbs', pageData)
})

homeRoutes.get('/planos', (req, res)=>{
let  session = req.session
let  pageData = session.pageData
  console.log(session)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/planos.hbs', pageData)
})

homeRoutes.get('/teams', (req, res)=>{
let  session = req.session
let  pageData = session.pageData
  console.log(session)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/desenvolvedores.hbs', pageData)
})

homeRoutes.get('/filmes', (req, res)=>{
 
let  session = req.session
let  pageData = session.pageData
  console.log(session)
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/filmes.hbs', pageData)
})

homeRoutes.get('/cadastro', (req, res)=>{
let  session = req.session
let  pageData = session.pageData
  if(pageData.user){
     res.render('homepages/index.hbs', pageData)
  } else {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/account/cadastro.hbs')
  }
  
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