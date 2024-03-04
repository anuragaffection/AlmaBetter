const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('someRandomKey');

function sendEmail(email) {
    const helloMessage = {
        to: email,
        from: 'anuragaffection07@gmail.com',
        subject: 'Hello World',
        text: 'Hello World ',
    }

    sgMail
        .send(helloMessage)
        .then(() => console.log(`send successfully =  ${email}`))
        .catch(error => console.error(`error =`, error));
}

function sendEmailWeekly() {
    const someEmails = ['anuragaffection07@gmail.com', 'someRandom07@gmail.com'];
    someEmails.forEach(email => {
        sendEmail(email)
    })
}

const timeDelay = 7 * 24 * 3600 * 1000;
setInterval(sendEmailWeekly, timeDelay);






