const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

class JWTHelper {
        sign =  (payload) => {
        const token =  jwt.sign(payload, secret, {algorithm:'HS256', encoding:'base64'})
        return token
        }
        
        decode = (token) => {
        let decoded = jwt.decode(token)
        let payload = decoded.split('.')
        
        }

        decodeEmailRegistration = (token) => {
            let decoded = jwt.decode(token)
            let payload = decoded.split('.')[0]
            let tokenDate = decoded.split('iat')[1]
        }
}


module.exports = new JWTHelper()