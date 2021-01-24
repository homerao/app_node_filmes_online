const repository = require('../repositories/sqlRepositories/categoryRepository')

class CategoryService {
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

      async findOneByName(name){
      let found = await repository.findOneByName(name)
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

module.exports = new CategoryService()