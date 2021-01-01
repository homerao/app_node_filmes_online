const headerRouter = require('express').Router()

headerRouter.all('/', (req, res, next)=>{
setCache(res)
setHeadersPolicy(res)
next()
console.log('Passou no set headers')
})

const setHeadersPolicy = (res) =>{
    
    res.set('Content-Security-Policy', 'default-src *; script-src *')
}

const setCache = (res) =>{
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
}

module.exports = headerRouter