// 
// The Function() Constructor
// Hoisting applies to variable declarations and to function declarations.
// Self-Invoking Functions




// 01. 
console.log("all ways to declare function ");

function area1 (length, breadth){
    return length * breadth;
}

let area2 = function (length, breadth){
    return length * breadth;
}

let area3 = (length, breadth) => {
    return length * breadth;
}

console.log(area1(10,5));
console.log(area2(10,5));
console.log(area3(10,5));




// 02. 
console.log("making function more concise");


console.log(`with zero parameter `);
let greet1 = function(){
    return "Hello"
}

let greet1c = () => {
    return "Hello"
}




console.log(`with one parameter `);
let greet2 = function(name){
    return `Hello ${name}`;

}

let greet2c = (name) => {
    return `Hello ${name}`;
}

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

console.log(`Hoisting is only possible with declerations function`);
console.log(call(5));
function call (number){
    let square = number * number ;
    return square;
}


console.log("Hoisting is not possible with expression function");
console.log(call1(7));
let call1 = function (number){
    return number * number;
} 

