const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SK);
const uuid = require("uuid");
const dotenv = require("dotenv")

// is stripe_private_key working in this file 

const app = express();
dotenv.config();

// middleware 
app.use(express.json())
app.use(cors())


// routes 
app.get('/', (req, res) => {
    res.send('Server is Running , Thank You');
})


app.post('/payment', (req, res) => {
    const {product, token} = req.body;

    console.log("product", product);
    console.log("price", product.price);

    const idempontencyKey = uuid();

    return stripe.customers.create({
        email : token.email, 
        source : token.id
    }).then(customer => {
        stripe.charges.create({
            amount : product.price * 100,
            currency : 'usd', 
            customer : customer.id, 
            receipt_email : token.email, 
            description : `purchase of ${product.name}` , 
            shipping : {
                name : token.card.name,
                address : {
                    country : token.card.address_country
                }
            }
        }, {idempontencyKey})
    })
    .then( result => res.status(200).json(result))
    .catch ( err => console.log(err))
})


// listen 
app.listen(4000, () => {
    console.log("server is listening at http://localhost:4000");
})