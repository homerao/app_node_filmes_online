const express = require('express')


const public = express()

public.use('/css', express.static(__dirname+'public/css'))
public.use('/js', express.static(__dirname+'public/js'))
public.use('/fontawesome', express.static(__dirname+'public/fontawesome'))
public.use('/imgs', express.static(__dirname+'public/imgs'))

module.exports = public