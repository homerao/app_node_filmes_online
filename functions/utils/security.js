const bcrypt = require('bcrypt')
const { verify } = require('jsonwebtoken')

class Security {

    hashingPassword = async (password) =>{
        const salt = await bcrypt.genSalt(8)
       let encripted = await bcrypt.hash(password, salt)
        return encripted
        }
        
    compare = async (plainPass, encriptedPass) =>{
    let compared = await bcrypt.compare(plainPass,encriptedPass)
      return compared    
            
    }
    validateToken = async (token)=>{
      var splitedDate = token.split('iat')[1]
      var data = new Date()
    }
    
    isExpired = (data) =>{
      if(new Date().getTime() - data.getTime() <= 0 ){
       return false
      } else {
        return true
      }
     }
}
  

module.exports = new Security()