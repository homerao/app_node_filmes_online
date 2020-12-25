const {Op} = require('sequelize');
const Model = require('../../models/country')
class CountryRepository {
  async save(country){
    let saved = await Model.create(country)
    return saved
  }
  async update(country){
    let updated = await Model.update(country, {where:{country_id:country.country_id}})
    return updated
  }
  async findOneById(id){
    let found = await Model.findOne({where:{country_id:id}})
    return found
  }
  async findOneByName(country_name){
    let found = await Model.findOne({where:{country: country_name}})
    return found
  }

  async findAll(limit, offset){
  let results = await Model.findAll(limit, offset)
  return results
  }

  async count(){
    let count = await Model.count()
    return count
  }
}

module.exports = new CountryRepository()