const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const helmet = require('helmet')
const app = express()

const port = 3000
app.use(helmet())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.engine('hbs', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use('/', apiIndex)






app.listen(port, function (){
    console.log("Servidor iniciado na porta")
})



