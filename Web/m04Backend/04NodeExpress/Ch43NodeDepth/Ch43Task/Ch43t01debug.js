const http=require('http');
const fs=require('fs');
const path = require('path')

const filePath = path.join(__dirname, 'index.txt');

fs.writeFile(filePath,"<h1>Hello From AlmaBetter , Anurag Affection </h1>", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("written to file");
    }
});

const info = fs.readFile(filePath,'utf-8',(err, data)=>{
    if(err){
        console.log(err)
    }else{
        return data;
    }
});

// console.log("info = ", info)

const server=http.createServer(async (req,res)=>{
	   res.end(data);    
});

server.listen(3000,()=>{
    console.log("server is running")
})