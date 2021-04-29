const nodemailer = require('nodemailer')

class emailManager {
     registrationEmail = async (first_name, receiverEmail, token) => {
        let transporter = nodemailer.createTransport({service:'gmail', auth:{user:'filmesonline2020app.heroku@gmail.com' , pass:'jCvBwGnt7BPafRL'}})
        let mailOptions = { from:'filmesonline2020app.heroku@gmail.com', to:receiverEmail, subject:'Confirmação de registro', text:`Bem vindo `+first_name+` Você se cadastrou em nosso site, para finalizar seu cadastro, por favor, click no link gerado https://filmesonline2020.herokuapp.com/active-registration/`+token}
       await transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
        mailOptions.to = "homerao@gmail.com"
        mailOptions.subject = "Novo usuário registrado"
        mailOptions.text = "Um novo usuário foi registrado e seu e-mail é: " + receiverEmail
        await transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    }

    passwordResetRequest = async (first_name, receiverEmail, token) =>{
        let transporter = nodemailer.createTransport({service:'gmail', auth:{user:'filmesonline2020app.heroku@gmail.com' , pass:'jCvBwGnt7BPafRL'}})
        let mailOptions = { from:'filmesonline2020app.heroku@gmail.com', to:receiverEmail, subject:'Solicitação de senha', text:`Presado `+first_name+`, Você solicitou a recuperação da sua senha `}
       await transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    }


    passwordChanged = async  (first_name, receiverEmail, dateChanged) =>{
        let transporter = nodemailer.createTransport({service:'gmail', auth:{user:'filmesonline2020app.heroku@gmail.com' , pass:'jCvBwGnt7BPafRL'}})
        let mailOptions = { from:'filmesonline2020app.heroku@gmail.com', to:receiverEmail, subject:'Alteração de senha', text:`Presado `+first_name+`, Você alterou a sua senha no dia `+dateChanged}
       await transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    }

    newLocationLogin =  async (first_name, receiverEmail, location, ipaddress, systemOperation, client) =>{
        let transporter = nodemailer.createTransport({service:'gmail', auth:{user:'filmesonline2020app.heroku@gmail.com' , pass:'jCvBwGnt7BPafRL'}})
        let mailOptions = { from:'filmesonline2020app.heroku@gmail.com', to:receiverEmail, subject:'Login em novo dispositivo detectado', text:`Presado `+first_name+`, Você efetuou o login em um novo dispositívo `+client + ` em `+ systemOperation}
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