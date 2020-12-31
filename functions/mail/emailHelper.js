const mailerHbs = require('nodemailer-express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')

const {host, port, user, pass} = require('')


const transport = nodemailer.createTransport({
    host, port, auth: {user, pass},
})


transport.use('compile', mailerHbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./functions/'),
    extName:'.html',
}))

module.exports = transport
