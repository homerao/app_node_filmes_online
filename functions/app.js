// requires necessários
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const webRoutes = require('./routes/webroutes/webRoutes')
const authentication = require('./middlewares/AuthMiddleware')
//setando o cors
app.use(cors())
// setando o middleware de authentication
//app.use(authentication)
// setando o handlebars
app.engine('hbs', handlebars({defaultLayout:'main', extname:'hbs', layoutsDir:__dirname+'/views/layouts',partialsDir:__dirname+'/views/layouts/partials'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views');
// setando o body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'/public')));
console.log(__dirname + " " + path.join(__dirname,'/public'))
// setando o morgan
app.use(morgan("common"))

// setando o helmet
app.use(helmet())


// setando as rotas da aplicação web
app.use('/', webRoutes)
app.use('/api', apiIndex)

 app.listen((process.env.NODE_ENV === 'development' ? 3000: process.env.PORT), ()=>{
    console.log("Servidor iniciado na porta" + process.env.PORT + " " + path.join(__dirname,'/public'))
}) 

/* app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta" + process.env.PORT + " " + path.join(__dirname,'/public'))
})  */

//module.exports.app = firebase.https.onRequest(app)










