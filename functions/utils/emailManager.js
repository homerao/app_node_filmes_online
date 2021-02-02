const nodemailer = require('nodemailer')

class emailManager {
     registrationEmail = async (first_name, receiverEmail, token) => {
        let transporter = nodemailer.createTransport({service:'gmail', auth:{user:'filmesonline2020app.heroku@gmail.com' , pass:'jCvBwGnt7BPafRL'}})
        let mailOptions = { from:'filmesonline2020app.heroku@gmail.com', to:receiverEmail, subject:'Confirmação de registro', text:`Bem vindo `+first_name+` Você se cadastrou em nosso site, para finalizar seu cadastro, por favor, click no link gerado `}
       await transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
        }
}



module.exports = new emailManager()