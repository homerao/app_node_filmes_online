const repository = require('../repositories/sqlRepositories/filmRepository')

class FilmService {
      async save(film){
       let cat = await repository.save(film)
       return cat
      }

      async update(film){
      let updated = await repository.update(film)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
      return found
      }

      async findOneByTitle(title){
      let found = await repository.findOneByTitle(title)
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

module.exports = new FilmService()