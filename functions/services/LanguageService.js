const repository = require('../repositories/sqlRepositories/languageRepository')

class LanguageService {
      async save(language){
       let cat = await repository.save(language)
       return cat
      }

      async update(language){
      let updated = await repository.update(language)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
      }

      async findOneByName(name){
      let found = await repository.findOneByLanguageName(name)
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

module.exports = new LanguageService()