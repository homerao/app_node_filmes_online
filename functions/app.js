const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const helmet = require('helmet')
const firebase = require('firebase-functions')
const app = express()

const port = 3000
app.use(helmet())
app.engine('hbs', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use('/', apiIndex)





module.exports.webapp = firebase.https.onRequest(app)




