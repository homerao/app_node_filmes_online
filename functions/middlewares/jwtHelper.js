const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const sign = (payload) => {
const token = jwt.sign(payload, secret, {algorithm:'ES256',expiresIn:'24h', encoding:'base64'})
}