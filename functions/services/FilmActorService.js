const repository = require('../repositories/sqlRepositories/filmActorRepository')

class FilmActorService {
      async save(filmActor){
       let cat = await repository.save(filmActor)
       return cat
      }

      async update(filmActor){
      let updated = await repository.update(filmActor)
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

module.exports = new FilmActorService()