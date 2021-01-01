const  jwt = require('jsonwebtoken')
const authRouter = require('express').Router()


authRouter.all('/', (req, res, next)=>{
    const token = req.headers.authorization
    //verificando o token
    console.log("Passou no auth")
    choose(req, res)
    if(!token){
        
        return res.status('401').send({error: "erro, por favor preencha suas credenciais"})
    } else {
        next()
    }
    
})

authRouter.all('/logged', (req, res, next)=>{
    const token = req.headers.authorization
    //verificando o token
    console.log("Passou no auth")
    if(!token){
        res.redirect('/login')
        
    } else {
        next()
    }
    
})

const choose = (req, res)=>{
 let endpoint = req.uri
 console.log(endpoint)
}

authRouter.use('/api/auth', (req, res, next)=>{
    
})

module.exports = authRouter
