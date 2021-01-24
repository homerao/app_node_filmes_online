const repository = require('../repositories/sqlRepositories/inventoryRepository')

class InventoryService {
      async save(inventory){
       let cat = await repository.save(inventory)
       return cat
      }

      async update(inventory){
      let updated = await repository.update(inventory)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
      return found
      }

      async findAll(limit, offset){
      let found = await repository.findAll(limit, offset)
      return found
      }

      async count(){
        return await repository.count()
    }
}

module.exports = new InventoryService()