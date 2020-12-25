const {Op} = require('sequelize');
const Model = require('../../models/film_text')

class FilmTextRepository {
  async save(filmtext){
    let saved = await Model.create(filmtext)
    return saved
  }
  async update(filmtext){
  let updated = await Model.update(filmtext, {where:{film_id: filmtext.film_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{film_id:id}})
  return found
  } 
  async findOneByTitle(title){
  let found = await Model.findOne({where:{title:{[Op.like]:'%'+title}}})
  return found
  }
  async findOneByDescription(description){
    let found = await Model.findOne({where:{description:{[Op.like]:'%'+description+'%'}}})
    return found
 }

  async findAll(limit, offset){
  let filmTexts  = await Model.findAll(limit, offset)
  return filmTexts
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new FilmTextRepository()