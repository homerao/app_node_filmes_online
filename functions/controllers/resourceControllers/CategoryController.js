const service = require('../services/CategoryService')

class CategoryController {

    async save(req, res){
      let category = req.body
      service.save(category).then((data)=>{
       return res.send(data)
      }).catch((err)=>{
         console.log("Erro, não foi possível cadastrar a categoria "+ err)
      })
    }

    async update(req, res){
      let category = req.body
    service.update(category).then(data=>{
      return res.send(data)
    }).catch(err=>{
      return res.send(err)
    })
    
    }

    async findOneById(req, res){
     let id = req.query.id
     service.findOneById(id).then((data)=>{
      return res.send(data)
     }).catch((err)=>{
      return res.send(err)
     })
    }

    async findAll(req, res){
      let limit, offset
      limit = req.params.limit
      offset = req.params.offset
      service.findAll(limit, offset).then((data)=>{
        return res.send(data)
       }).catch((err)=>{
        return res.send(err)
       })
    }
}

module.exports = new CategoryController()