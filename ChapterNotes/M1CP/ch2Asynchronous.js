

// 01. 
// single threaded programming language 
// javascript, ruby is a single threaded programming language




// 02.  
// multi threaded programming language 
// java, c++, python are multi threaded programming language




// 03. 
// callback queue 



// 04. 
// callback stack







// 05. 
// setTimeout()

// if you need to run a function only one time then use setTimeout

// syntax :- setTimeout(function, delayTime)
// syntax :- setTimeout(function, delaytime, argument1, argument2, argument3 );









// 06. 
// setInterval()

// if you need to run a function multiple time then use setInterval

// setInterval us self calling function 
// setInterval need to stop, otherwise program will go infinite number of times
// seInteval is perpetual, (means programs will runs, until memory runs out)

// setInterval (function, dalayTime);
// setInterval (function, delayTime, argument1, argument2, argument3 )







// 07: 
// example using setTimeout()

// Write a program to display a Text Once After 3 Second
// function will execute after calling 

console.log("Hello World ");

function greet(){
    console.log("Hello Friends");
} 

setTimeout(greet, 3000); // function call using setTimeout

console.log("Namastey World");
greet(); // simple function call 




// write a program to display a text once after 3 second 
// by passing arguments using setTimeout

function greetHello(name, message ){
    console.log(`Hello ${name}, ${message}`);

}

setTimeout(greetHello, 3000, "John", "How are You ? ");








// 08. 

// example using setInterval()
// Display Time Every 3 Second

console.log("Display time ");

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let timeNow = `${hours} : ${minutes} : ${seconds}`;

function displayTime (){
    console.log(`Now the time is ${timeNow}`);
}

let intervalId = setInterval(displayTime, 2000);

setTimeout(function (){
    clearInterval(intervalId)
}, 6000);





// 09. clearTimeout

// syntax :- clearTimeout(function, miliseconds)
// by using setTimeout we can display or perfrom any task after certain interval of time.
// but lets suppose we have to halt or stop that function before the execution of task,
// we can use clearTimeout.




// 10. clearInterval
// 




// 11.
// 
/* 
 Synchronous programming refers to a traditional programming approach
 where tasks are executed sequentially (one after the other). 
 In contrast, asynchronous programming allows for 
 multiple tasks to be executed concurrently without blocking the main thread or UI.

*/