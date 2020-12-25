const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize')
const op = require('sequelize').Op

const Model = require('../../models/address')

class AddressRepository {
  async save(address){
  let ad = await Model.create(address) 
  return ad
  }

  async update(address) {
    let updated = await Model.update(address, {where: {address_id: address.address_id}})
    return updated
  }
  async findById(id){
    let address = await Model.findOne({where:{address_id:id}})
    return address
  }
  async findByAddressName(address_name){
    let address = await Model.findOne({where: {address:{[op.like]:'%'+address_name}}})
  }
  async findAll(){
    let addresses = await Model.findAll()
    return addresses
  }

  async findAllByDistrict(district){
    let addresses = await Model.findAll({where: {district: {[op.like]:'%'+district}}})
    return addresses
  }

  async findAllByCity(city){
   let addresses = await Model.findAll({where: {city_id:city}})
   return addresses
  }

  async countAddresses(){
    let addresses = await Model.count()
    return addresses
  }
}

module.exports = new AddressRepository()