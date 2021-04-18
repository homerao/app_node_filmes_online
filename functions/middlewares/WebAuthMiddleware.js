
const webAuthMiddleware = (req, res, next) =>{
     let user = req.session.user
     if(typeof user !== 'undefined'){
        next()
     } else {
         res.redirect('/login')
     }
}

module.exports = webAuthMiddleware



