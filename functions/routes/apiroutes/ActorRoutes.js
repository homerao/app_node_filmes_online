const routes = require('express').Router()
const actorController = require('../../resourceControllers/ActorController')

routes.put('/', (req, res) =>{
    actorController.save(req,res)
} )

routes.patch('/', async (req, res) =>{
   await  actorController.update(req,res)
} )

routes.get('/id/:actor_id', (req, res) =>{
    actorController.findById(req,res)
} )

routes.get('/firstName/', (req, res) =>{
    actorController.findByFirstName(req,res)
} )

routes.get('/lastName/', (req, res) =>{
    actorController.findByLastName(req,res)
} )

routes.get('/', (req, res) =>{
    actorController.findAll(req, res)
} )

routes.get('/count', (req, res)=>{
    actorController.count(req,res)
})

module.exports = routes