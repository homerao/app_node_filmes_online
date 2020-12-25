const {DataTypes} = require('sequelize')
const op = require('sequelize').Op

const Model = require('../../models/actor')

class ActorRepository  { 
  
  async save (actor) {
  
  let saved = await model.create({first_name: actor.first_name, last_name:actor.last_name})
    return saved
  }
  async update(actor) {
 let updated =await Model.update(actor, {where: {actor_id: actor.actor_id}})
  return updated   
  }
  async findOne(id) {
  const actor =  await  Model.findOne({where:{actor_id: id}})
  return actor
  }
  async findByFirstName (name) {
  let actor = await  Model.findOne({where: {first_name: { [op.like]: '%'+name}}})
  return actor
  }

  async findByLastName (name) {
    let actor = await  Model.findOne({where: {last_name: { [op.like]: '%'+name}}})
    return actor
    }

  async findAll (limit) {
    let actors = await  Model.findAll({limit: limit })
    return actors
  }

  async findAllFirstNameStartsWith(name) {
    let actors = await  Model.findAll({where: {first_name: {[op.like]:'%'+name}} })
    return actors
  }

  async findAllFirstNameEndsWith(name) {
    let actors = await  Model.findAll({where: {first_name: {[op.like]:name+ '%'}} })
    return actors
  }

  async findAllFirstNameContains(name) {
    let actors = await  Model.findAll({where: {first_name: {[op.like]:'%'+name+ '%'}} })
    return actors
  }

  async countActors(){
    let count = await Model.count()
    return count
  }
}

module.exports = new ActorRepository()