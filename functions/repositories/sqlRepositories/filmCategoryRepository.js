const {Op} = require('sequelize');
const Model = require('../../models/film_category')

class FilmCategoryRepository {
  async save(filmCategory){
    let saved = await Model.create(filmCategory)
    return saved
  }
  async update(filmCategory){
  let updated = await Model.update(filmCategory, {where:{film_id: filmCategory.film_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{film_id:id}})
  return found
  } 

  async findAll(limit, offset){
  let customers  = await Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new FilmCategoryRepository()