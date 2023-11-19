const http=require('http'); // importing sever http
const fs=require('fs') // importing file system 

fs.writeFileSync("index.txt","<h1>Hello From AlmaBetter, but this time from another file</h1>");
const data=fs.readFileSync("index.txt",'utf-8');

const server=http.createServer((req,res)=>{
    res.end(data)
});

server.listen(3000,()=>{
    console.log("server is running")
})