const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET


const sign = async (payload) => {
const token = await jwt.sign(payload, secret, {algorithm:'ES256',expiresIn:'24h', encoding:'base64', })
return token
}

const decode = (token) => {
let splited = token.split('.')
let payloadEncoded = splited[0]

}

module.exports = sign