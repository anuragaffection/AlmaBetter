// file system = fs 


// node js follow  non blocking io modle 
// by default asynchronous way of handle task 

const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log("erro =", err, "data = ", data)
})




console.log("finished reading file")