const service =  require('../services/CityService')

class CityController  {
    save(req, res)  {
    let city = req.body
    service.save(city).then((data)=>{
    return console.log("Endereço salvo com sucesso "+ data)
    }).catch((err)=>{
      return console.log("Falha ao cadastrar o endereço "+ err)
    })
    
    }
    async update(req, res) {
       let  city = req.body
       service.update(city).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
       
    }
    findById(req, res){
    service.findOneById(req.params.city_id).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
    }

    async findByName(req, res){
    let city = req.body.city
        
    service.findOneByName(city).then((data)=>{
        return console.log("Cidade encontrada ")
        }).catch((err)=>{
          return console.log("Falha ao buscar a cidade "+ err)
        })
    
    }



    async findAll(req, res){
      await service.findAll().then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
    }

    async count(req, res){
        await service.count().then((data)=>{
            return res.send(data)
            }).catch((err)=>{
              return res.send(err)
            })
    }

}

module.exports = new CityController()