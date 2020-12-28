const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Home', userlogged:true}
      res.render('index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  const data = {title:'Home', userlogged:false}
    res.render('index.hbs', data)
})

homeRoutes.get('/login', (req, res)=>{
  const data = {title:'login', userlogged:false}
    res.render('login.hbs', data)
})
module.exports = homeRoutes