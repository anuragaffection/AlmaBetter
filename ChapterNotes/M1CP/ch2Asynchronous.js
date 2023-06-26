// 01. single threaded programming language 
// javascript, ruby is a single threaded programming language



//02.  multi threaded programming language 
// java, c++, python are multi threaded programming language



// 03. callback queue 


// 04. callback stack




// 05. setTimeout()
// if you need to run a function only one time then use setTimeout


// 06. setInterval()
// if you need to run a function multiple time then use setInterval






// 07: Write a program to display a Text Once After 3 Second
// // function will execute after calling 

console.log("Hello World ");

function greet(){
    console.log("Hello Friends");
} 

setTimeout(greet, 3000); // function call

console.log("Namastey World");
greet(); // function call 






// 08. Display Time Every 3 Second

console.log("Display time ");

function displayTime (){
    console.log(`Now the time is ${Date()}`);
}

let intervalId = setInterval(displayTime, 1000);

setTimeout(function (){
    clearInterval(intervalId)
}, 5000);



