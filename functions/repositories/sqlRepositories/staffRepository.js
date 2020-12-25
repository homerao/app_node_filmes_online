const {Op, QueryTypes} = require('sequelize');
const Model = require('../../models/staff')

class StaffRepository {
  async save(staff){
    let saved = await Model.create(staff)
    return saved
  }
  async update(staff){
  let updated = await Model.update(staff, {where:{staff_id:staff.staff_id}})
  return updated
  }
  async findOneById(id){
  let found = await Model.findOne({where:{staff_id:id}})
  return found
  }
  async findByFirstName (name) {
    let staff = await  Model.findOne({where: {first_name: { [op.like]: '%'+name}}})
    return staff
  }
  
  async findByLastName (name) {
      let staff = await  Model.findOne({where: {last_name: { [op.like]: '%'+name}}})
      return staff
  }

  async findByAddressId(id){
   let staff = await Model.findOne({where:{address_id:id}})
   return staff
  }

  async findByEmail(email){
    let staff = await Model.findOne({where:{email:email}})
    return staff
  }
  async findByUserName(userName){
    let staff = await Model.findOne({where:{userName:userName}})
    return staff
  }
  async findAllActiveStaff(active, limit, offset){
    let found = await Model.findAll({where:{active:active},limit, offset})
    return found
  }

  async findAll(limit, offset){
  let staff  = await Model.findAll(limit, offset)
  return staff
  }

  async count(){
  return await Model.count()
  }

}

module.exports = new StaffRepository()