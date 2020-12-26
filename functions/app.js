const express = require('express')
const handlebars = require('express-handlebars')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const firebase = require('firebase-functions')
const handlebars = require('express-handlebars')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
app.engine('hbs', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan())
app.use(cors())
app.use(helmet())
app.use('/', apiIndex)












