const http = require('http'); // importing  http module 

const  server = http.createServer( (req, res) => { // creating http server 
    // handling incoming requests [req, res ] 

    res.end("<h1> Hello World </h1>") // sending response to  client 
})

server.listen( 3001, () => { // starting the server 
    console.log("server is running");
})