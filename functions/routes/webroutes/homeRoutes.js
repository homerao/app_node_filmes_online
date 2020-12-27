const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Home', userlogged:false}
      res.render('index.hbs', data)
})

homeRoutes.get('/', (req, res)=>{
  const data = {title:'Home', userlogged:false}
    res.render('index.hbs', data)
})
module.exports = homeRoutes