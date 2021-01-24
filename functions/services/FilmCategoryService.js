const repository = require('../repositories/sqlRepositories/filmCategoryRepository')

class FilmCategoryService {
      async save(filmCategory){
       let cat = await repository.save(filmCategory)
       return cat
      }

      async update(filmCategory){
      let updated = await repository.update(filmCategory)
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

module.exports = new FilmCategoryService()