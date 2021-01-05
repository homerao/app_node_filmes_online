const  jwt = require('jsonwebtoken')
const authRouter = require('express').Router()


authRouter.get('/', (req, res, next)=>{
    const token = req.headers.authorization
    //verificando o token
    console.log("Passou no auth" + token)
    choose(req, res)
    if(!token){
        
        return res.status('401').send({error: "erro, por favor preencha suas credenciais"})
    } else {
        next()
    }
    
})






module.exports = authRouter
