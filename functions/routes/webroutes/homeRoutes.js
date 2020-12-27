const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Home'}
      res.render('index.hbs', data)
})

module.exports = homeRoutes