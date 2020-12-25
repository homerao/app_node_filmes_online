const {Op} = require('sequelize');
const Model = require('../../models/customer')

class CustomerRepository {
  async save(customer){
    let saved = Model.create(customer)
    return saved
  }
  async update(customer){
  let updated = Model.update(customer, {where:{customer_id: customer.customer_id}})
  return updated
  }
  async findOneById(id){
  let found = Model.findOne({where:{customer_id:id}})
  return found
  } 
  async findOneByFirstName(name){
  let found = Model.findOne({where:{first_name:{[Op.like]:'%'+name}}})
  return found
  }
  async findOneByLastName(name){
    let found = Model.findOne({where:{last_name:{[Op.like]:'%'+name}}})
    return found
 }

  async findAll(limit, offset){
  let customers  = Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return Model.count()
  }

}

module.exports = new CustomerRepository()