// 
// The Function() Constructor
// Hoisting applies to variable declarations and to function declarations.
// Self-Invoking Functions
// closures vs higher order function 


// anonymous function = functions without the name 


// hoisting = using functions or variable before defining 
// hoisting means = pushing the function everything above 


// closures = when a functions return another function
// closures is also a higher order function  


// high order function = when a function takes a function as parameter
// when a function return another function , then it is also a high order function
// map is an example of high order function 


// callbacks = the function that is passed as arguments is called as callbacks
// a callback is a function that is passed as an argument to another function - 
// and is executed when the receiving function completes its task
// upon an event = 




// 01. 
console.log("all ways to declare function ");



// using function declarations
function area1 (length, breadth){
    return length * breadth;
}



// using function expressions 
// this is also called as anonymous function
let area2 = function (length, breadth){
    return length * breadth;
}



// using function expressions & arrow function 
// this is also called as anonymous function
let area3 = (length, breadth) => {
    return length * breadth;
}



console.log(area1(10,5));
console.log(area2(10,5));
console.log(area3(10,5));







// 02. 
console.log("making function more concise");


console.log(`with zero parameter `);

// function expressions with zero parameter 
let greet1 = function(){
    return "Hello"
}

// function expressions with zero parameter & arrow function
let greet1c = () => {
    return "Hello"
}




console.log(`with one parameter `);

// function expressions with one parameter 
let greet2 = function(name){
    return `Hello ${name}`;

}

// function expressions with one parameter & arrow function 
let greet2c = (name) => {
    return `Hello ${name}`;
}

// making more consise
let greet2cc = name => `Hello ${name}`;





console.log(`with two parameter `);
let greet3 = function(name, number){
    return `Hello ${name} , your lucky number is ${number}`;
}

let greet3c = (name, number) => {
    return `Hello ${name} , your lucky number is ${number}`;
}




console.log(`with zero parameter `);
console.log(greet1());
console.log(greet1c());

console.log(`with one parameter `);
console.log(greet2("John"));
console.log(greet2c("John"));
console.log(greet2cc("John"));

console.log(`with two parameter `);
console.log(greet3("John", 111 ));
console.log(greet3c("John", 111 ));






// 03
console.log(`calculating square of a number `);
 
let square = num => num * num ;

let square1 = num => {
    return num * num ;
}

let square2 = (num) => {
    return num * num;
}

let square3 = function(num) {
    return num * num;
}

function square4 (num){
    return num * num;
}

console.log(square(5));
console.log(square1(6));
console.log(square2(7));
console.log(square3(8));
console.log(square4(9));






// 04. 
console.log(` Variable Hoisting`);


var test ;
console.log(test); // undefined

var marks = 82;
console.log(marks); // 82

console.log(marks1); // undefined 
var marks1 = 82 ;

marks2 = 88;
console.log(marks2); // 88 , hoisting happed 
var marks;

// marks3 = 90;
// console.log(marks3);   // error 
// let marks;    // hoisting is not possible with let 






// 05.
console.log(`Function Hoisting `);
// function is always hoisted 
// var is hoisted 

console.log(`Hoisting is only possible with declerations function`);

console.log(call(5));

function call (number){
    let square = number * number ;
    return square;
}


// console.log("Hoisting is not possible with expression function");
// console.log(call1(7)); // error 
// let call1 = function (number){
//     return number * number;
// } 






// 06.
/* 
   The execution of a function can be triggered in several ways, 
   such as by calling the function by its name, 
   by invoking it as a method of an object, 
   or by using the apply or call or bind  methods. 
*/






// 07.
console.log("07. Closures");

function buildGreeting() {
    let message = 'Hello Code ';

    function greetUser() {
        console.log(message);
    }

    return greetUser;
}

// buildGreeting();
let hello = buildGreeting();
hello();






// 08.
console.log("08. More example on closures");

function buildGreeting1(message) {

   return function(audience){
        return message + ' ' + audience;
   }
   
}

let greeting1 = buildGreeting1('Hi');
let greeting2 = buildGreeting1('Hello');

console.log(greeting1('User')); // Hi User
console.log(greeting2('World')); // Hello World






// 08.
// experiment on closure 

console.log("08. Experiement on closure ")

let closuresTest = function () {
    let d = 4;
    return function () {
        console.log(d++);
    }

}

// closuresTest(); // function call // 4
// closuresTest();

let closuresTest1 = closuresTest();
closuresTest1(); // 4
closuresTest1(); // 5
closuresTest1(); // 6

let closuresTest2 = closuresTest();
closuresTest2(); // 4
closuresTest2(); // 5
closuresTest2(); // 6




// 09. 
// to check whether string is palindrome or not 

console.log("Check Palindrome ");
let palindrome = function (str) {
    for (let i = 0, j = str.length -1; i <= str.length / 2, j >= str.length / 2; i++, j-- ){
        if (str[i] !== str[j]){
            return false;
        }
    }
    return true;
}

console.log(palindrome ("aba"));
console.log(palindrome ("abba"));
console.log(palindrome ("madam"));
console.log(palindrome ("123321"));
console.log(palindrome ("abacs"));







// 10
// more on variable hoisting 

console.log("more example on variable hoisting ");


function test10 () {
    var a = 11;
    console.log(a); // 11
}


function test10a () {
    var a;
    console.log(a); // undefined
    a = 12;
}


function test10ab () {
    var a ;
    console.log(a); // undefined 

    a = 13;
    console.log(a); // 13
}


function test10abc () {
    a = 14;
    console.log(a); // 14
    var a;
}


function test10abcd () {
    a = 15;
    console.log (a); // 15
    var a;

    console.log (a); // 15 
}

test10();
test10a();
test10ab();
test10abc();
test10abcd();







// 11.
// 
console.log("more example on hoisting ");

test11();
test11a();
test11ab();
// test11abc();
// test11abcd();

function test11 () {
    let a = 11;
    console.log(a); // 11
}


function test11a () {
    let a;
    console.log(a); // undefined
    a = 12;
}


function test11ab () {
    let a ;
    console.log(a); // undefined 

    a = 13;
    console.log(a); // 13
}


/* function test11abc () {
    a = 14;
    console.log(a); // giving error , hoisting is not possibel with let variable 
    let a;
  }

*/


/* function test11abcd () {
    a = 15;
    console.log (a); // error
    let a;

    console.log (a); // error
 }

*/







// 12. 
// template string 
// use of ${}
console.log(`template string `);

console.log("Hello World ");
console.log('Hello World ');

console.log('Hello " World ');
console.log("Hello ' World ");

console.log("hello \" World ");
console.log("hello \' world ");





	

