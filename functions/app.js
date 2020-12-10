const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const app = express()

const port = 3000
app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')







app.listen(port, function (){
    console.log("Servidor iniciado na porta")
})



