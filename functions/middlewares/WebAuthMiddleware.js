const  jwt = require('jsonwebtoken')
const webAuthRouter = require('express').Router()


webAuthRouter.get('/', (req, res, next)=>{
    const token = req.getHeader('x-access-token')
    console.log(token)
    const splited = req.headers.authorization.split(' ')[1]
    if(!splited){
      res.redirect('/login')
    }
    //verificando o token
    console.log("Passou no auth")
    if(!token){
        res.redirect('/login')
        
    } else {
        next()
    }
    
})



module.exports = webAuthRouter
