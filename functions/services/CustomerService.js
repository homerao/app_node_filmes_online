const repository = require('../repositories/sqlRepositories/customerRepository')

class CustomerService {
      async save(customer){
       let customer = await repository.save(customer)
       return customer
      }

      async update(customer){
      let updated = await repository.update(customer)
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

module.exports = new CustomerService()