const Sequelize = require('sequelize')
const proc = require('process')
const firebase = require('firebase-admin')
firebase.initializeApp()

  



module.exports  = new Sequelize(proc.env.DATABASE,proc.env.USER,proc.env.PASSWORD,{host:proc.env.HOST, dialect:proc.env.DIALECT})




