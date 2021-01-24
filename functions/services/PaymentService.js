const repository = require('../repositories/sqlRepositories/paymentRepository')

class PaymentService {
      async save(payment){
       let cat = await repository.save(payment)
       return cat
      }

      async update(payment){
      let updated = await repository.update(payment)
      return updated
      }

      async findOneById(id){
      let found = await repository.findOneById(id)
      return found
      }

      async findAllPaymentByCustomerId(id){
      let found = await repository.findAllPaymentByCustomerId(id)
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

module.exports = new PaymentService()