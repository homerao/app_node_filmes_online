const {Op} = require('sequelize');
const Model = require('../../models/film')

class FilmRepository {
  async save(film){
    let saved = await Model.create(film)
    return saved
  }
  async update(film){
  let updated = await Model.update(film, {where:{film_id: film.film_id}})
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
 async findAllByYear(limit, offset, year){
 let found = await Model.findAll({where:{release_year: year}},limit, offset)
 return found
 }

 async findAllByYearGreaterOrEqual(limit, offset, year){
  let found = await Model.findAll({where:{release_year: {[Op.gte]:year}}},limit, offset)
  return found
  }

  async findAllByYearLessThanOrEqual(limit, offset, year){
    let found = await Model.findAll({where:{release_year: {[Op.lte]:year}}},limit, offset)
    return found
    }
 async findAllByRentalRateGreaterOrEqual(limit, offset,rate){
  let found = await Model.findAll({where:{[Op.gte]:rate}},limit,offset)
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

module.exports = new FilmRepository()