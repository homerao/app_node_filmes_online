const service =  require('../services/ActorService')

class ActorController  {
    save(req, res)  {
     
   
       
    service.save(req)
     
    res.send("ator salvo com sucesso")
    }
    async update(req, res) {
       let  actor = req.body
        
       await service.update(actor)
       res.send("Ator atualizado com sucesso!")
    }
    findById(req, res){
    service.findById(req.params.actor_id).then((data)=>{
        if(data == null){
            res.send("Usuário não encontrado")
        } else {
            res.send(data)
        }
     
    }).catch((err)=>{
        console.log("Erro ao buscar findById " + err)
        res.send("Erro " + err)
    }) 
    }

    async findByFirstName(req, res){
    let name = req.query.first_name
        
    service.findByFirstName(name).then((data)=>{ 
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

module.exports = new ActorController