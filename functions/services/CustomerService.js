const customerRepository = require('../repositories/sqlRepositories/customerRepository')
const repository = require('../repositories/sqlRepositories/customerRepository')
const Security = require('../utils/security')
class CustomerService {
      async save(customer){
        customer.passwd = hashing(customer.passwd)
       let saved = await repository.save(customer)
       return saved
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
      async findOneByLast(name){
        let found = await repository.findOneByLastName(name)
        return found
      }

      async findAll(limit, offset){
      let found = await repository.findAll(limit, offset)
      return found
      }

      async count(){
        return await repository.count()
      }

      async login(email, password){
        
      let customer = await customerRepository.login(email)
      console.log(customer)
      
      let accepted = await Security.compare(password, customer.getDataValue('passwd'))
      if(accepted){
        return customer
      } else {
        return false
      }
      }

      async logout(){
          return "" 
      }
}

module.exports = new CustomerService()