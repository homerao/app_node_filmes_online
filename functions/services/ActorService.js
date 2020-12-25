
const actorRepository = require('../repositories/sqlRepositories/actorRepository');

let a

class ActorService  {
    async save(actor) {
    let saved = await actorRepository.save(actor)
    return saved
    }
    async update (actor)  {
    let updated =  await actorRepository.update(actor)
    return updated
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