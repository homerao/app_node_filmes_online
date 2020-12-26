const express = require('express')
const handlebars = require('express-handlebars')
const apiIndex = require('./routes/apiroutes/ApiIndexRoutes')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
app.engine('hbs', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("common"))

app.use(helmet())
app.use('/', apiIndex)

 app.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado")
}) 

//module.exports.app = firebase.https.onRequest(app)










