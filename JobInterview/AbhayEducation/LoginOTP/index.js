const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail');

const app = express();
const port = 3000;
sgMail.setApiKey('someRandomKey');
app.use(express.json())



// mongodb setup 
mongoose.connect('stringUri', {
    dbName: nameOfDatabase,
})
const user = mongoose.model('User', {
    email: String,
    phone: String,
    otp: Number
})


// utility function 
function generateOTP() {
    const randomNumber = Math.random();
    const sixDigitRandomNumber = Math.floor(randomNumber * 1000000)
    return sixDigitRandomNumber;
}

function sendEmail(email, otp) {
    const otpMessage = {
        to: email,
        from: 'anuragaffection07@gmail.com',
        subject: 'OTP',
        text: `${otp}`,
    }

    sgMail
        .send(otpMessage)
        .then(() => console.log(`send successfully =  ${email}`))
        .catch(error => console.error(`error =`, error));
}

function sendPhone(phone, otp) {
    // use third party to send otp to phone number 
    // like for email i am using sendGrid mail 
}


// my plan is to send otp to both email & phone 
app.post('/signUp', (req, res) => {
    const { email, phone } = req.body;
    const otp = generateOTP();
    const newUser = new user({ email, phone, otp });
    newUser.save();
    sendEmail(email, otp);
    sendPhone(phone, otp);
    res.send({
        message: "Otp send Successfully at phone & email"
    })
})


app.post('/login', (req, res) => {
    const { email, phone, otp } = req.body;
    const findUser = user.findOne({ $or: [{ email: email }, { phone: phone }] });

    if (!findUser){
        res.send({
            message : "User Does not exist in db"
        })
    }

    if (findUser.otp !== otp) {
        return res.send({
            message : "You are entering wrong otp"
        })
    }

    const token = jwt.sign({ id: user._id }, '#$5565%^7');
    res.send(token)
})



app.listen(port, () => {
    console.log(`server is listening  at 3000`)
})