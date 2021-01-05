const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET


const sign =  (payload) => {
const token =  jwt.sign(payload, secret, {algorithm:'HS256',expiresIn:'24h', encoding:'base64'})
return token
}

const decode = (token) => {
let splited = token.split('.')
let payloadEncoded = splited[0]

}

module.exports = sign