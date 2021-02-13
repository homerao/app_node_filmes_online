const service =  require('../services/CustomerService')
const jwtHelper = require('../middlewares/jwtHelper')
const Security = require('../utils/security')
const emailSender = require('../utils/emailManager')
const addressService = require('../services/AddressService')


class WebCustomerController  {
    save(req, res)  {
    let {first_name, last_name, email, password} = req.body
    let customer = {customer_id: null, first_name:first_name, last_name: last_name,email: email,passwd:password, store_id:1, address_id:605, active: false,  create_date: new Date(), last_update: new Date()}
    console.log(customer)
    let addr = {address, address2, district, city_id, postal_code, phone, location, last_update} = req.body
    service.save(customer).then((data)=>{
      saveAdress(addr).then((saveAddress)=>{
        emailSender.registrationEmail(first_name, email, token)
        console.log(saveAddress)
        return res.redirect('/email-confirmation')
      }).catch((err)=>{
       console.log('erro ao salvar o endereço '+ err)
      })
      console.log(data)
      let token = jwtHelper.sign(email)

    
    }).catch((err)=>{
      console.log('Erro ao salvar '+ err)
      return res.redirect('/cadastro')
    })
    
    }

    async saveAdress(address)  {
    return await addressService.save(address)
    }

    registerActivation = (req, res) => {
    let decoded = jwtHelper.decodeEmailRegistration(req.params.token)
    console.log(decoded)
    }
    async update(req, res) {
       let  customer = req.body
       service.update(customer).then((data)=>{
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
    console.log("Logado antes do if")
    let {email, password} = req.body
    let encripted = await Security.hashingPassword(password)
    console.log(email,encripted )
    let customer =  await service.login(email, password)
      
    let session
    let error = ""
    
    if(customer && customer.get('active')){
     session = req.session 
     session.pageData = {'logged':true, 'customer':true, 'user':customer.get({plain:true}) }
     console.log("Logado")
     console.log(plainCustomer)
     console.log(req.session)
      return  res.render('homepages/index.hbs', session.pageData)
    } else if(!plainCustomer.active){
      error = "Por favor, valide seu email de cadastro"
      return res.render('/login', error)
    } else {
      error = "credenciais inválidas"
      return res.render('/login', error) 
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