const homeRoutes = require('express').Router()


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
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
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
  const data = {title:'Filmes', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('homepages/filmes.hbs', data)
})




module.exports = homeRoutes