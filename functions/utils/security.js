const bcrypt = require('bcrypt')

class Security {

    hashingPassword = async (password) =>{
        const salt = await bcrypt.genSalt(8)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
        }
        
    compare = async (plainPass, encriptedPass) =>{
            const compared = await bcrypt.compare(plainPass,encriptedPass)
            
            return compared
    }
}


module.exports = new Security()