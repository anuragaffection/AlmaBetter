const console = require('console');
const http = require('http');

const port = 3000 ;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    console.log(req.url);

    if (req.url == '/') {
        res.end(`<h1>Hello World! from / </h1>`);
    }
    else if (req.url == '/about'){
        res.end('<h1>Hello World! from /about url   </h1>')
    }
    else {
        res.statusCode = 404; 
        res.end(`<h1>page not found  </h1> `);
    }
   
})


server.listen( port, () => {
    console.log(`server is listening to port ${port}`);
});

//  http://localhost:3000/


// nodemon automatically re-run the server after changes 