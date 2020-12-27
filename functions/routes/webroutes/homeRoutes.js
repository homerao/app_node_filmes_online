const homeRoutes = require('express').Router()


homeRoutes.get('/index', (req, res)=>{
      res.render('/functions/views/index.hbs')
})

module.exports = homeRoutes