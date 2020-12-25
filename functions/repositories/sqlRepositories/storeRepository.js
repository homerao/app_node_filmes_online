const {Op, QueryTypes} = require('sequelize');
const Model = require('../../models/store')

class StoreRepository {
  async save(store){
    let saved = await Model.create(store)
    return saved
  }
  async update(store){
  let updated = await Model.update(store, {where:{store_id: store.store_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{store_id:id}})
  return found
  }

  async findAll(limit, offset){
  let stores  = await Model.findAll(limit, offset)
  return stores
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new StoreRepository()