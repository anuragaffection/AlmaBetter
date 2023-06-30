//
//  arrays
//  





// 01. 
// what is an array 






// 02. 
// Types of an array
// one dimensional array 
// multi dimensional array 






// 03. 
// one dimensional array
// One-dimensional arrays are commonly used to store lists of items or sets of values.
console.log("One-d array ");
let oneD = [20, 40, 50, 60 ];
console.log(oneD);
console.log(oneD.length);
console.log(oneD[2]);






// 04.
// two dimensional 
// Multi-dimensional arrays are commonly used to store tables of data or matrices
console.log("2-d array ");
let twoD = [20, 40, 50, [23, 24, 25, 26], 60, 70 ];
console.log(twoD);
console.log(twoD.length);
console.log(twoD[3][2]);
console.log("Accessing each element in 2-d arrays ");
/* for (let i = 0 ; i < twoD.length ; i++){
     for (let j = 0; j < twoD[i].length; j++){
        console.log(twoD[i][j]);
     }
    }
*/ 



let multi = [
    [20, 40, 60, 50],
    [23, 34, 45, 56],
    [67, 78, 90, 96]
]

console.log(multi);
console.log(multi.length);
console.log(multi[2][2]);
console.log("Accessing each element in multi ");
for (let i = 0 ; i < multi.length ; i++){
    for (let j = 0; j < multi[i].length; j++){
        console.log(multi[i][j]);
    }
}







// 05.
// creating an array 
// Note: It is recommended to create arrays using array literals instead of other methods.
// array constructor 
// array literal 






// 06.
// array constructor 
console.log("Array constructor ");

let myArrayCons = new Array (3);
// this is creating an array with size 3 but no element in it

let myArrayCons1 = new Array (3, 4, 5, 6, 6, 8);
// this is creating an array with size 6, total element present in it

console.log(myArrayCons);
console.log(myArrayCons.length);

console.log(myArrayCons1);
console.log(myArrayCons1.length);





// 07.
// array literal 
console.log("Array Literal ");
let myArrayLit = ['Man', 'Go', 'aMan'];
console.log(myArrayLit);






// 08. 
console.log("List of all Methods, Properties & Iterator ");

/*

// **Array methods**

push()
pop()

shift()
unshift()

slice()
splice()

indexOf()
lastIndexOf()
includes()

find()
filter()

map()
reduce()
concat()

join()
reverse()

flat()
sort()
reduceRight()

some()
every()

forEach()


// **Array properties**

length
index


// **Array iterators**


for...of 
for...in 

*/






// 09.
// push , pop, unshift, shift 
console.log("Playing with an array - push, pop, unshift, shift ");

let myarray = [ 40, "anurag", true, 80, undefined, 111];

console.log(myarray);
console.log(myarray.length);

myarray.push(100);
console.log(myarray);

let poped = myarray.pop();
console.log(poped);
console.log(myarray);


myarray.unshift("Code is Love ");
console.log(myarray);

let shifted = myarray.shift();
console.log(shifted);
console.log(myarray);






// 10
console.log("adding element at higher index, without adding at their precedings");
console.log(myarray);
console.log(myarray.length);
console.log(myarray[myarray.length - 1]);
console.log(myarray[myarray.length]);

myarray[myarray.length + 1] = 123;
console.log(myarray);
// If you attempt to add elements to higher indices , -
// the indices in between will have an undefined value.





// 11
// syntax 
// slice(startingIndex)
// slice(startingIndex, EndingIndex)
// we can't add element through slice

console.log("slice ");
console.log(myarray);

let  slice_of_arr = myarray.slice(4) ; 
//it is taking all the value of array after index 4
console.log(slice_of_arr);
console.log(myarray);


let slice_of_arr_2 = myarray.slice(4,6);
console.log(slice_of_arr_2);
console.log(myarray);






// 12
// splice
// syntax
// splice(startingIndex)
// splice(startingIndex, deletecount)
// splice(startingIndex, deleteCount, ItemsToAdd)
// affect orginal array 

console.log("splice");
console.log(myarray);

console.log("splice with one parameter ");
let splicedPart = myarray.splice(5);
console.log(splicedPart);
console.log(myarray);

console.log("splice with two parameter ");
let splicedPart1 = myarray.splice(2, 0);
console.log(splicedPart1);
console.log(myarray);

console.log("splice with multiple parameter ");
let splicedPart2 = myarray.splice(3, 2, "Hello", undefined, "world", null);
console.log(splicedPart2);
console.log(myarray);






// 13
// indexOf
// lastIndexOf
// includes 

console.log(myarray);

myarray[2] = 345;
myarray[3] = 345;
myarray[7] = 345;

console.log(myarray);

console.log("IndexOf - provides first index of an elements  ");
console.log(myarray.indexOf(345));

console.log("lastIndexOf - provides last index of an elements ");
console.log(myarray.lastIndexOf(345));

console.log("include - check true or false ");
console.log(myarray.includes(345));






// 14 
// find()
console.log("find - will find one element that passes the condition ");
console.log(myarray);

let foundElement = myarray.find(num => num > 400);
let foundElement1 = myarray.find(num => num > 20);

let foundElement2 = myarray.find(function(num){
    return num > 300;
});

let foundElement3 = myarray.find( (num) => {
    return num > 300;
});

let foundElement4 = myarray.find( (num) =>  num > 300 );
let foundElement5 = myarray.find( num => num > 300);


console.log(foundElement);
console.log(foundElement1);
console.log(foundElement2);
console.log(foundElement3);
console.log(foundElement4);
console.log(foundElement5);



let found = myarray.find( function finding (num ) {
    return num > 20;
})


let finding = function (num ) {
    return num > 20;
}
let found1 = myarray.find(finding);

console.log(found);
console.log(found1);





// 15
// fllter 
console.log("filter will filter all the elements that passes the conditon ");
console.log(myarray);

let allFound = myarray.filter(num => num > 300);
console.log(allFound);
console.log(myarray);

let allFound1 = myarray.filter( function (num ) {
    return num > 20;
});

let allFound2 = myarray.filter( num => {
    return num > 20;
});

console.log(allFound1);
console.log(allFound2);






// 16
// map()
// .map() is a function 
// .map() - returns a new array with operation withi the function

// it is different from Map() data structure 
// Map() data structure - stores value in key - value pair 
console.log(".map() function ")
console.log(myarray);

let mapArray = myarray.map(function (number) {
    return number * 2;
});
console.log('map Array', mapArray );

let mapArray1 = myarray.map(number => number - 300 );
console.log('.map()', mapArray1, 'original ', myarray);





// 17.
// reduce()
// syntax 
// .reduce (callbackfunction, initilavalue)

// callback function takes two arguments: accumulater and currentvalue
// accumalator : previous result of iteration
// currentvalue : element being iterated over

console.log("reduce () ");
const sumOfNumbers = [5,4,8];
console.log(sumOfNumbers);

let reduced = sumOfNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let reduced1 = sumOfNumbers.reduce(function (accumulator, currentValue){
    return accumulator + currentValue;
}, 10 );


let callBackFun = function (accumalator, currentValue){
    return accumalator + currentValue;
}
let reduced2 = sumOfNumbers.reduce(callBackFun, 10);

console.log(reduced);
console.log(reduced1);
console.log(reduced2);




// 18.
// concat()
console.log('concat');

var array1 = ['a','b'];
let array2 = ["c", "d"];

let array3 = array1.concat(array2);
console.log(array3);




// 19.
console.log("join")

let strArray =["a","b", "c", "d"] ;

let joined = strArray.join(); // default separator is ,
console.log(joined);

let joined1 = strArray.join("");
console.log(joined1);

let joined2 = strArray.join(" ");
console.log(joined2);

strArray = strArray.join();  // default separator is ,
console.log(strArray);