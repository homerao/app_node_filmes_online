const homeRoutes = require('express').Router()
const filmes = require('../../mock-data/sample-data')
const customerController = require('../../webControllers/CustomerController')
homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Index', userlogged:true}
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.set('Content-Security-Policy', 'default-src *; script-src *')
      res.render('homepages/index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  const data = {title:'Home', userlogged:true}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/home', (req, res)=>{
  const data = {title:'Home', userlogged:true}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/index.hbs', data)
})

homeRoutes.get('/login', (req, res)=>{
  const data = {title:'Login', userlogged:false}
 
    res.render('homepages/login.hbs', data)
})

homeRoutes.get('/logoff', (req, res)=>{
  const data = {title:'Login', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/login.hbs', data)
})

homeRoutes.get('/planos', (req, res)=>{
  const data = {title:'Planos', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/planos.hbs', data)
})

homeRoutes.get('/teams', (req, res)=>{
  const data = {title:'Planos', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/desenvolvedores.hbs', data)
})

homeRoutes.get('/filmes', (req, res)=>{
  const data = {title:'Filmes', userlogged:false, filmes}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/filmes.hbs', data)
})

homeRoutes.get('/cadastro', (req, res)=>{
  const data = {title:'Cadastro', userlogged:false,}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/cadastro.hbs', data)
})

homeRoutes.post('/authentication',  (req, res)=>{
   customerController.login(req, res)
})

homeRoutes.post('/new-customer', async (req, res)=>{
  
  customerController.save(req, res)
})

homeRoutes.post('/email-confirmation', async (req, res)=>{
   res.render('homepages/email-confirmation.hbs')
})




module.exports = homeRoutes