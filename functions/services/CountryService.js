const repository = require('../repositories/sqlRepositories/countryRepository')

class CountryService {
      async save(country){
       let cat = await repository.save(country)
       return cat
      }

      async update(country){
      let updated = await repository.update(country)
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

module.exports = new CountryService()