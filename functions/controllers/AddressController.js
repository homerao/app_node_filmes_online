const { Model } = require('mongoose')
const service = require('../services/addressService')


class ActorController {
    async save(req, res) {
        let address = req.body
        await service.save(address).then((data)=>{
        console.log(data)
        }).catch((err)=>{
         console.log('Erro ao tentar salvar o endereço ' + err)
        })
    }

    async update(req, res){
        let updatedData = req.body
        await service.update(updatedData).then((result)=>{
       return res.send(result)
        }).catch((err)=>{
           console.log("Erro, não foi possível atualizar o endereço "+ updatedData)
        })

    }
    async findOneById(id){
        await  service.findOneById(id).then((data)=>{
         return res.send(data)
        }).catch((err)=>{
          console.log("Erro, não foi possível encontrar um endereço com esse id "+id+ " msg: "+ err)
        })
    }

    async findAll(req, res){
    await service.findAll().then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        return res.send("Erro " +err)
    })
    }
    async findAllByCity(req, res){
    await service.findAllByCity(req.params.city).then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        return res.send("Erro " +err)
    })
   
    }

    async count(req, res){
    await service.count().then((data)=>{
        return res.json(data)
    }).catch((err)=>{
        res.json("Não foi possível contar as entidades")
    })
    }
}

module.exports = new ActorController