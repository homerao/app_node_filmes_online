const repository = require('../repositories/sqlRepositories/staffRepository')

class StaffService {

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
      }

      async findByFirstName(name){
      let found = await repository.findByFirstName(name)
      return found
      }

      async findByLastName(name){
        let found = await repository.findByLastName(name)
        return found
      }

      async findAllActiveStaff(active){
        let found = await repository.findAllActiveStaff(active)
        return found
      }
      async findByAddressId(id){
        let found = await repository.findByAddressId(id)
        return found
      }
      async findByEmail(email){
        let found = await repository.findByEmail(email)
        return found
      }

      async findByUserName(userName){
        let found = await repository.findByUserName(userName)
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

module.exports = new StaffService()