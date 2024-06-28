const express = require("express");
const dotenv = require('dotenv')
const path = require('path')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRoutes')
const { connectToMongodb } = require('./connect')

dotenv.config()
const app = express();
const PORT = 8001;


connectToMongodb(process.env.URL).then(() => {
    console.log("Mongodb connected ")
})


// ejs setup 
// ejs is compatible with express js 
app.set("view engine", 'ejs')
app.set('views', path.resolve('./views'))


app.use(express.json()) // when we are taking json input 
app.use(express.urlencoded({ extended: false })); // when we are taking url as input 

app.use('/url', urlRoute);
app.use('', staticRoute)


app.listen(PORT, () => {
    console.log(`server is  listening on ${PORT}`)
})