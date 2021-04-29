
const service = require('../../services/AddressService')


class ActorController {
    async save(req, res) {
        let address = req.body
        service.save(address).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
         console.log('Erro ao tentar salvar o endereço ' + err)
        })
    }

    async update(req, res){
        let updatedData = req.address
        service.update(updatedData).then((data)=>{
           return res.send(data)
        }).catch((err)=>{
           return res.send("erro "+err)
        })

    }
    async findOneById(id){
        service.findOneById(id).then((data)=>{
         return res.send(data)
        }).catch((err)=>{
          console.log("Erro, não foi possível encontrar um endereço com esse id "+id+ " msg: "+ err)
        })
    }

    async findAll(req, res){
    service.findAll().then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        return res.send("Erro " +err)
    })
    }
    async findAllByCity(req, res){
    service.findAllByCity(req.params.city).then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        return res.send("Erro " +err)
    })
   
    }

    async count(req, res){
    service.count().then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        res.send("Não foi possível contar as entidades"+ err)
    })
    }
}

module.exports = new ActorController()