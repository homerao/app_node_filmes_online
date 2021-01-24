const repository = require('../repositories/sqlRepositories/cityRepository')

class CityService {
      async save(city){
       let cit = await repository.save(city)
       return cit
      }

      async update(city){
      let updated = await repository.update(city)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
      return found
      }

      async findOneByName(city){
      let found = await repository.findOneByName(city)
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

module.exports = new CityService()