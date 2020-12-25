const {Op} = require('sequelize');
const Model = require('../../models/film_actor')

class FilmActorRepository {
  async save(filmeActor){
    let saved = Model.create(filmeActor)
    return saved
  }
  async update(filmActor){
  let updated = Model.update(filmActor, {where:{actor_id: filmActor.actor_id}})
  return updated
  }
  async findOneById(id){
  let found = Model.findOne({where:{film_id:id}})
  return found
  } 


  async findAll(limit, offset){
  let customers  = Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return Model.count()
  }

}

module.exports = new FilmActorRepository()