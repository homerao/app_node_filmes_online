const userWebRoute = require('express').Router()



userWebRoute.get('/', (req, res)=>{
  return res.send("pagina logada")
})


module.exports = userWebRoute