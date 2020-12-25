const {Op} = require('sequelize');
const Model = require('../../models/film_text')

class FilmTextRepository {
  async save(filmtext){
    let saved = Model.create(filmtext)
    return saved
  }
  async update(filmtext){
  let updated = Model.update(filmtext, {where:{film_id: filmtext.film_id}})
  return updated
  }
  async findOneById(id){
  let found = Model.findOne({where:{film_id:id}})
  return found
  } 
  async findOneByTitle(title){
  let found = Model.findOne({where:{title:{[Op.like]:'%'+title}}})
  return found
  }
  async findOneByDescription(description){
    let found = Model.findOne({where:{description:{[Op.like]:'%'+description+'%'}}})
    return found
 }

  async findAll(limit, offset){
  let filmTexts  = Model.findAll(limit, offset)
  return filmTexts
  }

  async count(){
  return Model.count()
  }

}

module.exports = new FilmTextRepository()