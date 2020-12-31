const  jwt = require('jsonwebtoken')
const authRouter = require('express').Router()


authRouter.all('/api/*', (req, res, next)=>{
    const token = req.headers.authorization
    //verificando o token
    console.log("Passou no auth")
    if(!token){
        res.redirect('/login')
        return res.status('401').send({error: "erro, por favor preencha suas credenciais"})
    } else {
        next()
    }
    
})

authRouter.all('/web/logged/*', (req, res, next)=>{
    const token = req.headers.authorization
    //verificando o token
    console.log("Passou no auth")
    if(!token){
        res.redirect('/login')
        return res.status('401').send({error: "erro, por favor preencha suas credenciais"})
    } else {
        next()
    }
    
})

authRouter.use('/api/auth', (req, res, next)=>{
    
})

module.exports = authRouter
