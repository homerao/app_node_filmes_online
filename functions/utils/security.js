const bcrypt = require('bcrypt')

const hashingPassword = async (password) =>{
const hashedPassword = await bcrypt.hash(password, 8)
return hashedPassword
}

module.exports = hashingPassword