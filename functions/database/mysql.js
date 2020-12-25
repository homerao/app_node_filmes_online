const Sequelize = require('sequelize')

 

module.exports  = new Sequelize('sakila', 'root', '12345', { host:'localhost', dialect:'mysql'})