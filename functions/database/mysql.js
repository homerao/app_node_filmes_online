const Sequelize = require('sequelize')
const firebase = require('firebase-admin')
firebase.initializeApp()
const proc = require('process')

  



module.exports  = new Sequelize(proc.env.DATABASE,proc.env.USER,proc.env.PASSWORD,{host:proc.env.HOST, dialect:proc.env.DIALECT})




