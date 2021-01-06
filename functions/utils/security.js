const bcrypt = require('bcrypt')

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
}


module.exports = new Security()