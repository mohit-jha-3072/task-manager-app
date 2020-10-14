const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohitjha3072@gmail.com',
        subject: 'Welcome to task manager application',
        text: `Welcome to the app ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohitjha3072@gmail.com',
        subject: 'Account cacelled',
        text: `Good bye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}