const {Op, QueryTypes} = require('sequelize');
const Model = require('../../models/rental')

class RentalRepository {
  async save(rental){
    let saved = await Model.create(rental)
    return saved
  }
  async update(rental){
  let updated = await Model.update(rental, {where:{rental_id: rental.rental_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{rental_id:id}})
  return found
  }

  async findAll(limit, offset){
  let customers  = await Model.findAll(limit, offset)
  return customers
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new RentalRepository()