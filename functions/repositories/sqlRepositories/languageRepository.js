const {Op} = require('sequelize');
const Model = require('../../models/language')

class LanguageRepository {
  async save(language){
    let saved = await Model.create(language)
    return saved
  }
  async update(language){
  let updated = await Model.update(language, {where:{language_id: language.language_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{language_id:id}})
  return found
  }
  async findOneByLanguageName(name){
    let found = await Model.findOne({where:{name:{[Op.like]:'%'+name}}})
    return found
  }  

  async findAll(limit, offset){
  let customers  =  await Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new LanguageRepository()