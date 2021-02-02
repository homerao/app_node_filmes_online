const service =  require('../services/CustomerService')
const jwtHelper = require('../middlewares/jwtHelper')
const Security = require('../utils/security')
const emailSender = require('../utils/emailManager')

class WebCustomerController  {
    save(req, res)  {
    let {first_name, last_name, email, password} = req.body
    let customer = {customer_id: null, first_name:first_name, last_name: last_name,email: email,passwd:password, store_id:1, address_id:605, create_date: new Date(), last_update: new Date()}
    console.log(customer)
    service.save(customer).then((data)=>{
      console.log(data)
      emailSender.registrationEmail(first_name, email, 'dfsdsdfs65g4gggsg65h4hj4j6hj4j654s6454hj4jjj4')
    return res.redirect('/email-confirmation')
    }).catch((err)=>{
      console.log('Erro ao salvar '+ err)
      return res.redirect('/cadastro')
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

   async login(req, res){
    let {email, password} = req.body
    let encripted = await Security.hashingPassword(password)
    console.log(email,encripted )
    let customer =  await service.login(email, password)
    let session
    if(customer){
     session = req.session 
     session.pageData = {'logged':true, 'customer':true, 'user':customer.get({plain:true}) }
     
     console.log(req.session)
      return  res.render('homepages/index.hbs', session.pageData)
    } else {
      res.redirect('/login')
    }
    /* 
          if(customer){
            console.log('customer encontrado')
            let {customer_id,  email, first_name} = customer
            console.log("Customer data ****** "+customer.toString())
            console.log({customer_id:customer_id,  email: email, })
            let payload = {customer_id:customer_id,first_name:first_name,email: email, }
            
            let token = jwtHelper(payload)
            res.setHeader('x-access-token',token)
            console.log(token)
           let data = {userlogged:true,}
           
           return  res.redirect('web/customers/menu')
          } else {
            res.redirect('/login')
            console.log('erro de login')
          }
           */
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