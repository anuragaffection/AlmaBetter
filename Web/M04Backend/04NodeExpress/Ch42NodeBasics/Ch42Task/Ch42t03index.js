const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer ( (req, res) => {

    if (req.method === 'GET' && req.url === '/'){
        const filePath = path.join(__dirname, 'Ch42t03index.html');  // check here 

        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err){
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.end('Internal Server Error ');
                return ;
            }

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(content);
        })
    }
    else {
        res.writeHead(404 , {'Content-Type' : 'text/plain'});
        res.end('404 Not Found');
    }
});

const PORT = 3003; 
server.listen ( PORT  , () => {
    console.log(`server is listening on port ${PORT}`)
});