const userWebRoute = require('express').Router()
const authMiddleware = require('../../middlewares/AuthMiddleware')
userWebRoute.get('/', authMiddleware, (req, res)=>{
  return res.send("pagina logada")
})


module.exports = userWebRoute