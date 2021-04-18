
const webAuthMiddleware = (req, res, next) => {
    let pageData = req.session.pageData
    console.log(req)
    console.log("Entrou no middleware")
    if(typeof pageData.user !== 'undefined'){
        console.log("Passou no webauth")
       next()

    } else {
        console.log("foi redirecionado para o login")
        res.redirect('/login')
    }
}

module.exports =  webAuthMiddleware



