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
const homeRoutes = require('./routes/webroutes/homeRoutes')
const webRoutes = require('./routes/webroutes/webRoutes')
const public = require('./middlewares/PublicMiddleware')
const session = require('express-session')
//setando o cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(cors())
// setando o handlebars
app.engine('hbs', handlebars({defaultLayout:'main', extname:'hbs', layoutsDir:__dirname+'/views/layouts',partialsDir:__dirname+'/views/layouts/partials'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views');
// setando o body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// configurando arquivos estáticos
app.use(express.static(path.join(__dirname,'public')));
public.use('/css', express.static(path.join(__dirname,'/public/css')))
public.use('/js', express.static(path.join(__dirname,'/public/js')))
public.use('/fontawesome', express.static(path.join(__dirname,'/public/fontawesome')))
public.use('/imgs', express.static(path.join(path.join(__dirname,'/public/imgs'))))
public.use('/static', express.static(path.join(path.join(__dirname,'/public'))))
console.log("Path do servidor "+ path.join(__dirname,'public/fontawesome'))
// setando o morgan
app.use(morgan("common"))

// setando o helmet
/* app.use(helmet.contentSecurityPolicy({
    directives:{
      defaultSrc:["'self'"],
      scriptSrc:["'self'", 'http?(s)://localhost:'+process.env.PORT,'code.jquery.com','maxcdn.bootstrapcdn.com'],
      styleSrc:["'self'",'http?(s)://localhost:'+process.env.PORT,'maxcdn.bootstrapcdn.com'],
      fontSrc:["'self'",'http?(s)://localhost:'+process.env.PORT,'maxcdn.bootstrapcdn.com']}})); */
// configurando helmet
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter()); 
//configuração da sessão do express
 app.use(session({secret:process.env.NODE_SESSION_SECRET,name:"filmes2020",
                 
                resave: true,
                saveUninitialized: true

})) 





// setando as rotas da aplicação web
app.use('/', homeRoutes)
app.use('/web', webRoutes)
app.use('/api', apiIndex)

 app.listen((process.env.NODE_ENV === 'development' ? 3000: process.env.PORT), ()=>{
    console.log("Servidor iniciado na porta" + process.env.PORT + " " + path.join(__dirname,'/public'))
}) 

/* app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta" + process.env.PORT + " " + path.join(__dirname,'/public'))
})  */

//module.exports.app = firebase.https.onRequest(app)










