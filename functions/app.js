// requires necessários
const express = require('express')
const handlebars = require('express-handlebars')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const webRoutes = require('./routes/webroutes/userWebRoutes')
// setando o handlebars
app.engine('hbs', handlebars({defaultLayout:'main', extname:'hbs', layoutsDir:'./functions/views/layouts',partialsDir:'./functions/views/layouts/partials'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/functions/views');
// setando o body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// setando o morgan
app.use(morgan("common"))
// setando o helmet
app.use(helmet())
// setando as rotas da aplicação web
app.use('/', webRoutes)
app.use('/api', apiIndex)

 app.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado")
}) 

//module.exports.app = firebase.https.onRequest(app)










