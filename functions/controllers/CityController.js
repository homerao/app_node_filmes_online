const service =  require('../services/CityService')

class CityController  {
    save(req, res)  {
        let city = req.body
    service.save(city)
    res.send("Cidade salva com sucesso")
    }
    async update(req, res) {
       let  city = req.body
       let updated = await service.update(city)
       res.send("Cidade atualizada com sucesso! rows affected "+ updated)
    }
    findById(req, res){
    service.findById(req.params.city_id).then((data)=>{
        if(data == null){
            res.send("Cidade não encontrada")
        } else {
            res.send(data)
        }
     
    }).catch((err)=>{
        console.log("Erro ao buscar findById " + err)
        res.send("Erro " + err)
    }) 
    }

    async findByName(req, res){
    let name = req.query.first_name
        
    service.findOneByName(name).then((data)=>{ 
        if(data == -1){
          res.send("Não foi encontrado nenhum ator com o primeiro nome " +name)
        } else {
            return res.send(data)
        }
    }).catch((err)=>{
        return res.send("Erro, não foi possível encontar um ator com o primeiro nome "+ name + "Erro: "+ err)
    })
    
    }


    async findByLastName(req, res){
        let name = req.query.last_name
            
        service.findByLastName(name).then((data)=>{ 
            if(data == -1){
              res.send("Não foi encontrado nenhum ator com o segundo nome " +name)
            } else {
                return res.json(data)
            }
        }).catch((err)=>{
            return res.json("Erro, não foi possível encontar um ator com o segundo nome "+ name + "Erro: "+ err)
        })
        
    }
    async findAll(req, res){
      await service.findAll().then((data)=>{
          return res.json(data)
      }).catch((err)=>{
          return res.json('Erro no find all ' +err)
      })  
    }

    async count(req, res){
        await service.count().then((data)=>{
            res.json(data)  
        }).catch((err)=>{
            res.json("Não foi possível contar a entidade atores ")
        })
    }

}

module.exports = new CityController()