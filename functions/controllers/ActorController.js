const service =  require('../services/ActorService')

class ActorController  {
    async save(req, res)  {
    let actor = req.body   
    service.save(actor).then((data)=>{
       return res.send(data)
    }).catch((err)=>{
       return res.send("Erro " +err)
    })
    }
    async update(req, res) {
       let  actor = req.body
        
       service.update(actor).then((data)=>{
       return res.send(data)
    }).catch((err)=>{
        
        return res.send("Erro " +err)
    })
       
    }
    findById(req, res){
    service.findById(req.params.actor_id).then((data)=>{
       return  res.send(data)
     
    }).catch((err)=>{
     
      return   res.send("Erro " + err)
    }) 
    }

    async findByFirstName(req, res){
    let name = req.query.first_name
        
    service.findByFirstName(name).then((data)=>{ 
        return res.send(data)
    }).catch((err)=>{
        return res.send("Erro, não foi possível encontar um ator com o primeiro nome "+ name + "Erro: "+ err)
    })
    
    }


    async findByLastName(req, res){
        let name = req.query.last_name
            
        service.findByLastName(name).then((data)=>{ 
            return res.send(data)
        }).catch((err)=>{
            return res.json("Erro, não foi possível encontar um ator com o segundo nome "+ name + "Erro: "+ err)
        })
        
    }
    async findAll(req, res){
      service.findAll().then((data)=>{
          return res.send(data)
      }).catch((err)=>{
          return res.send('Erro no find all ' +err)
      })  
    }

    async count(req, res){
        service.count().then((data)=>{
          return  res.send(data)  
        }).catch((err)=>{
          return  res.send("Não foi possível contar a entidade atores" +err)
        })
    }

}

module.exports = new ActorController()