const {Op} = require('sequelize');
const Model = require('../../models/inventory')

class InventoryRepository {
  async save(inventory){
    let saved = await Model.create(inventory)
    return saved
  }
  async update(inventory){
  let updated = await Model.update(inventory, {where:{inventory_id: inventory.inventory_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{inventory_id:id}})
  return found
  } 

  async findAll(limit, offset){
  let inventory  =  await Model.findAll(limit,offset)
  return inventory
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new InventoryRepository()