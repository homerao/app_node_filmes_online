const repository = require('../repositories/sqlRepositories/filmTextRepository')

class FilmTextService {
      async save(filmText){
       let cat = await repository.save(filmText)
       return cat
      }

      async update(filmText){
      let updated = await repository.update(filmText)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
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

module.exports = new FilmTextService()