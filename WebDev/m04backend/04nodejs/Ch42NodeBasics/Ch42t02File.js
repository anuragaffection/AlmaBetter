const http=require('http'); // importing server http
const fs=require('fs') // importing file system 

fs.writeFileSync("index.txt","<h1>Hello From AlmaBetter, but this time from another file</h1>"); 
// will create new  file index.txt 
// writeFileSync = is synchronous = means it blocks the execution until the file written is not finished 

const data=fs.readFileSync("index.txt",'utf-8');
// readFileSync = is synchronous = 

const server=http.createServer((req,res)=>{
    res.end(data)
});

server.listen(3000,()=>{
    console.log("server is running")
})