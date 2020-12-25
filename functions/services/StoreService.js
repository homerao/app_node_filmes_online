const repository = require('../repositories/sqlRepositories/storeRepository')

class StoreService {

      async save(category){
       let cat = await repository.save(category)
       return cat
      }

      async update(category){
      let updated = await repository.update(category)
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
}

module.exports = new StoreService()