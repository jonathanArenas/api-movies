const jtw = require('jsonwebtoken')
import config from '../config'
const createToken = (data) =>{
    const token = jtw.sign(data, config.jwt.secret, {expiresIn: '1d'})
    return token

}
module.exports = createToken