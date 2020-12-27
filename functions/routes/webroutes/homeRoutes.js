const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
    const data = {title:'Home', userlogged:true}
      res.render('index.hbs', data)
})

module.exports = homeRoutes