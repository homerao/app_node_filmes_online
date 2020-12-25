
const actorRepository = require('../repositories/sqlRepositories/actorRepository');

let a

class ActorService  {
    async save(req) {
        a = {first_name:req.body.first_name, last_name:req.body.last_name}
        console.log(req.body)
        console.log(a)
    await actorRepository.save(a)
    return true
    }
    async update (actor)  {
      await actorRepository.update(actor).then((data)=>{
          console.log("atualizado " + data)
      }).catch((err)=>{
          console.log("Erro ao atualizar " + err)
      })
    }

    async findById(id){
     let actor = await actorRepository.findOne(id)
     return actor
    }

    async findByFirstName(name){
    let actor = await actorRepository.findByFirstName(name)
    if(actor == null){
       return -1
    } else {
        return actor
    }
    }

    async findByLastName(name){
        let actor = await actorRepository.findByLastName(name)
        if(actor == null){
           return -1
        } else {
            return actor
        }
    }
    async findAll(){
        let actors = await actorRepository.findAll()
        if(actors == null){
           return new Error("erro no find all")
        } else {
            return actors
        }
    }

    async count(){
        let count = await actorRepository.countActors()
          return count
    }
}

module.exports = new ActorService