// anonymous function
// hoisting 
// call stack in function




// 01. 
console.log("Creating simple function ");

function sum ( a, b) {
    // a, b are parameter, 
    // also called as formal parameter 
    // a & b acts as local variable 
    console.log( a + b );
}

sum ( 7, 8);
//  7, 8 are argument , 
//  also called as real parameter
//  also called as actual parameter 

sum ( 7, 8, 10); // here 10 will be ignored by javascript
sum ( 7 ); // NaN
sum (); // Nan






// 02. 
console.log("calculating area of rectangle");

function area (length, breadth){
    return length * breadth;
}

console.log( area(10, 5) );







// 03. 
console.log("Default parameter ");
console.log("Default parameter come into action , when there is no arguments passed ")

function sum1 ( a = 0, b = 0) {
    // a, b are parameter, 
    // also called as formal parameter 
    console.log( a + b );
}

sum1 ( 7, 8); // 15
sum1 ( 7, 8, 10); // 15
sum1 ( 7 ); // 7,  a = 7, b = 0
sum1 (); // 0 , a = 0, b = 0







// 04
console.log("Another example of default parameter function ");

function namastey ( name = "Hero"){
    console.log(`Namastey ${name} ! `);
}

namastey("Dosto");
namastey ();








// 05 
console.log("Accessing argument using array notations ");

function sum2 (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        // arguments.length is inbuilt properties
        sum += arguments[i];
        // using array notation to accessing the arguments or values
    }
    console.log(`total arguments passed are ${arguments.length}`);
    console.log(`sum = ${sum}`);
}

sum2();
sum2(1);
sum2(1,2);
sum2(1,2,3);
sum2(10,20,30,40);






// 06
console.log("some more examples using arguments.length");

function greet (greeting, name){
    if (arguments.length === 1){
        greeting = "Namastey";
        return console.log(`${greeting} ${name}`);
    }

    return console.log(`${greeting} ${name}`);
}

greet("Hello", "world");
greet("Hi", "John");
greet("Dosto")
greet("", "Dosto");
greet();
greet("Hi", "John", "Arc");
