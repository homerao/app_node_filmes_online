
const repository = require('../repositories/sqlRepositories/addressRepository')

class AddressService {
    async save(address){
    let a = await  repository.save(address)
    return a
    }

    async update(address){
    let updated = await repository.update(address)
    return updated
    }

    async findOneById(id){
    let one = repository.findById(id)
    return one
    }
    async findAllByCity(city){
        let addresses = await repository.findAllByCity(city)
        return addresses
    }

    async findAll(){
        let addresses = await repository.findAll()
        return addresses
    }

    async count(){
        let addresses = await repository.countAddresses()
        return addresses
    }

    

    
}

module.exports = new AddressService()