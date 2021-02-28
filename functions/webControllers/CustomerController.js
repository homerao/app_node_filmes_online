const service =  require('../services/CustomerService')
const jwtHelper = require('../middlewares/jwtHelper')
const Security = require('../utils/security')
const emailSender = require('../utils/emailManager')
const addressService = require('../services/AddressService')
const cityService = require('../services/CityService')
const mysql = require('../database/mysql')
const fun = mysql.fn


class WebCustomerController  {
    save(req, res)  {
    
    let {first_name, last_name, email, password} = req.body
    let customer = {customer_id: null, first_name:first_name, last_name: last_name,email: email,passwd:password, store_id:1, address_id:null, active: false,  create_date: new Date(), last_update: new Date()}
    console.log(customer)
    let country_id = 15
    let addr = {address:req.body.address, district:req.body.district, city_id:null, postal_code:req.body.postal_code, phone:req.body.phone, location:null, last_update:new Date()} 
    console.log(addr)
    let cidade = {city:req.body.city, country_id:country_id}
    console.log(req.body)
    console.log(cidade)
    service.findOneByEmail(customer.email).then((customerResult)=>{
     if(customerResult == null){
      let recordCity = cityService.findOneByName(cidade.city)
      recordCity.then((cityResult)=>{
       if(cityResult == null){
        cityService.save(cidade).then((savedCity)=>{
         addr.city_id = savedCity.toJSON().city_id
         console.log("SAved City "+ savedCity.city_id)
         addressService.save(addr).then((addrSaved)=>{
         customer.address_id = addrSaved.toJSON().address_id
         service.save(customer).then((savedCustomer)=>{
          console.log("Customer cadastrado")
         }).catch((custError)=>{
          console.log("Erro ao cadastrar o customer")
         })
         }).catch((addrError)=>{
           console.log("Erro ao salvar o endereço  if "+ addrError)
         })
        }).catch((err)=>{
         console.log("Erro ao salvar a cidade "+ err)
        })
       } else {
         cityService.findOneByName(cidade.city).then((data)=>{
          addr.city_id = data.toJSON().city_id
          console.log("Endereço completo " + data.toJSON() )
          addressService.save(addr).then((data)=>{
            customer.address_id = data.toJSON.address_id
            console.log("Customer completo "+ customer)
            service.save(customer).then((data)=>{
              console.log(data)
             res.redirect("/login")
            }).catch((err)=>{
  
            })
          }).catch((addressError)=>{
           console.log("Erro ao salvar o endereço else " + addressError)
          })
         }).catch((err)=>{
  
         })
       }
      }).catch((err)=>{

      })

     } else {
       res.redirect("/login")
     }
    }).catch((err)=>{
      console.log("Erro ao buscar o customer")
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
     let plainCustomer = await customer.get({plain:true})
     session.pageData = {'logged':true, 'customer':true, 'user':customer.get({plain:true}) }
     console.log("Logado")
     
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