const { Op} = require('sequelize');
const sequelize = require('../../database/mysql')
const Model = require('../../models/city')
class CityRepository {
  async save(city){
  let created = await Model.create(city)
  return created
  }

  async update(city){
  let updated = await Model.update(city, {where:{city_id:city.city_id}})
  return updated
  }

  async findOneById(id){
  let found = await Model.findOne({where:{city_id: id}})
  return found
  }

  async findOneByName(city_name) {
  let found = await Model.findOne({where: {city:{[Op.like]:"%"+city_name}}})
  return found
  }

  async findAll(limit, offset){
  let cities = await Model.findAll(limit, offset)
  return cities
  }

  async count(){
    let count = await Model.count()
    return count
  }
}

module.exports = new CityRepository()