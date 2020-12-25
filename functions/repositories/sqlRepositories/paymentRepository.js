const {Op, QueryTypes} = require('sequelize');
const Model = require('../../models/payment')

class PaymentRepository {
  async save(payment){
    let saved = await Model.create(payment)
    return saved
  }
  async update(payment){
  let updated = await Model.update(payment, {where:{payment_id: payment.payment_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{payment_id:id}})
  return found
  }
  async findAllPaymentByCustomerId(customer_id){
  let paymentAmount = await Model.sequelize.query("SELECT SUM(AMOUNT) FROM PAYMENT WHERE CUSTOMER_ID =:customer_id",{
    replacements:{'customer_id': customer_id},
    type: QueryTypes
  })
  return paymentAmount
  }

  async findAll(limit, offset){
  let customers  = await Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new PaymentRepository()