const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Index', userlogged:true}
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.set('Content-Security-Policy', 'default-src \'self\'; img-src *; media-src *; script-src *')
    
      res.render('index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  const data = {title:'Home', userlogged:false}
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.set('Content-Security-Policy', 'default-src \'self\'; img-src *; media-src *; script-src *')
    res.render('index.hbs', data)
})

homeRoutes.get('/login', (req, res)=>{
  const data = {title:'login', userlogged:false}
  res.set('Content-Security-Policy', 'default-src \'self\'; img-src *; media-src *; script-src *')
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('login.hbs', data)
})
module.exports = homeRoutes