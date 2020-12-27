const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
      res.render('index')
})