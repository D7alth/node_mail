const sendMail = require('nodemailer'), 
sender = sendMail.createTransport({
    host:'smtp.gmail.com', 
    port:'587',
    secure:false,
    auth:{
        user:'testmail@gmail.com',
        pass:'********************'
    }
}),
email = {
    from:'testmail@gmail.com',
    to:'testmail2@gmail.com',
    subject:'test',
    text: 'this mail is a just test'
}
sender.sendMail(email, (err)=>{
    if(err){console.log(err)}
     else{console.log('OK')}
    });