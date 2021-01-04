const service =  require('../services/CustomerService')
const jwtHelper = require('../middlewares/jwtHelper')
class WebCustomerController  {
    save(req, res)  {
    let customer = req.body
    service.save(city).then((data)=>{
    return res.send(data)
    }).catch((err)=>{
      return res.send(err)
    })
    
    }
    async update(req, res) {
       let  customer = req.body
       service.update(city).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
       
    }
    findById(req, res){
    service.findOneById(req.params.customer_id).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
    }

    async findByName(req, res){
    let name = req.query.first_name
        
    service.findOneByName(name).then((data)=>{
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
    
    }

    async findByLastName(req, res){
      let name = req.query.first_name
          
      service.findOneByName(name).then((data)=>{
          return res.send(data)
          }).catch((err)=>{
            return res.send(err)
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

   login(req, res){
    let {email, password} = req.body
    console.log(email, password)
      service.login(email, password).then((data)=>{
        console.log(data)
        let customer = data
        let {password} = customer
        let payload = customer
        console.log(payload)
        let token = jwtHelper(payload)
        console.log(token)
        let pageData  = {data: data, token:token, title:'Customer menu'}
          console.log(pageData)
          return  res.redirect('/web/customers/logged/menu',pageData)
          }).catch((err)=>{
            console.log(err)
            console.log("Erro de login")
            return  res.render('homepages/login'+ err)
            
          })
  }

 async logout(req, res){

    await service.logout().then((data)=>{
      req.headers.authorization = ""
        return res.send(data)
        }).catch((err)=>{
          return res.send(err)
        })
 }

}

module.exports = new WebCustomerController()