const Sequelize = require('sequelize')
const config = require('../config/config.json')

 

module.exports  = new Sequelize(config.development.database,config.development.username,config.development.password,{host:"mysql-8.c2qdj1boddoe.us-east-2.rds.amazonaws.com", dialect:"mysql"})
    
