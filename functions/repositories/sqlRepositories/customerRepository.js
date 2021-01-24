const {Op} = require('sequelize');
const Model = require('../../models/customer')

class CustomerRepository {
  async save(customer){
    console.log(customer)
    let saved = await Model.create(customer)
    return saved
  }
  async update(customer){
  let updated = await Model.update(customer, {where:{customer_id: customer.customer_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{customer_id:id}})
  return found
  } 
  async findOneByFirstName(name){
  let found = await Model.findOne({where:{first_name:{[Op.like]:'%'+name}}})
  return found
  }
  async findOneByLastName(name){
    let found = await Model.findOne({where:{last_name:{[Op.like]:'%'+name}}})
    return found
 }

  async findAll(limit, offset){
  let customers  = await Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return await Model.count()
  }
  async login(email){
    let customer = await Model.findOne({where:{email:email} })
    console.log('veio no repository '+ customer)
    return customer
  }
  async logout(){
      return ""
  }  

}

module.exports = new CustomerRepository()