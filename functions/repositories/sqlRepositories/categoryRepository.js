const {DataTypes, Sequelize, Op} = require('sequelize');
const category = require('../../models/category');
const Model = category
const endpoint = "http://localhost:3000/api/index/v1/category/"
class CategoryRepository {
  async save(category){
   let created = await Model.create(category)
   return created
  }

  async update(category){
  let updated = await Model.update(category, {where:{category_id:category.category_id}})
  return updated
  }

  async findOneById(id){
  let found = await Model.findOne({where:{category_id:id}})
  return found
  }
  async findOneByName(name){
    let found = await Model.findOne({where:{name: name}})
    return found
  }

  async findAll(limit, offset){
  let categories = Model.findAll({limit: limit, offset: offset})
  
  return categories
  }

  async count(){
    let count = await Model.count()
    return count
  }
}

module.exports =  new CategoryRepository()
