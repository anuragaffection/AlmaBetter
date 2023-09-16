//
//  arrays 
//  
//  string - is moved to another module (Module 02 , chapter 01, )
//  


/**
 *  Introduction to array
 *  -- What is an array
 *  -- why is an array data structure required 
 *  -- types of array
 *  -- Creating an array
 *  -- array methods 
 * 
 *  
 *  Real world application 
*/



/**
 *  01. What is an array 
 *  02. Types of an array 
 *  03. One dimensional array 
 *  04. two dimensional array 
 *  05. Creating an array
 *  06. array constructor
 *  07. array literal
 *  08. all methods & properties & iterator 
 * 
 *  09. push, pop, unshift, shift
 *  10. adding element at higher index, concept - here - undefined things 
 *  11. slice
 *  12. splice
 *  13. indexof, lastIndexof, inculdes
 *  14. find
 *  15. filter
 *  16. map()          + extra { .map vs Map}
 *  17. reduce ()      --- very important 
 *  18. concat
 *  19. join ()
 *  20. reverse ()
 *  21. sort ()
 *  21. flat ()
 *  22. array with object --- important topics 
 *  23. spread operators  --- important topics - used both for iteration & concatenation
 *  24. Creating multi dimensional array
 *  25. iterating over multi dimensional array 
 *  26. for of
 *  27. for in
 *  28. Working of javascript 
 * 
*/






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
let oneD = [20, 40, 50, 60];
console.log(oneD);
console.log(oneD.length);
console.log(oneD[2]);






// 04.
// two dimensional 
// Multi-dimensional arrays are commonly used to store tables of data or matrices
console.log("2-d array ");
let twoD = [20, 40, 50, [23, 24, 25, 26], 60, 70];
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
for (let i = 0; i < multi.length; i++) {
    for (let j = 0; j < multi[i].length; j++) {
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

let myArrayCons = new Array(3);
// this is creating an array with size 3 but no element in it

let myArrayCons1 = new Array(3, 4, 5, 6, 6, 8);
// this is creating an array with size 6, total element present in it

console.log(myArrayCons);
console.log(myArrayCons.length);

console.log(myArrayCons1);
console.log(myArrayCons1.length);




// creating 2d array using array constructor


const rows = 3; // Number of rows in the 2D array
const cols = 4; // Number of columns in the 2D array

const empty2DArray = new Array(rows).fill().map(() => new Array(cols)); // Initialize an empty 2D array with rows and columns
console.log(empty2DArray);


let n = 4;
let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0)); // n * n
let matrix2 = new Array(rows).fill(0).map(() => new Array(cols).fill(0)) // rows * col
// checkout leetcode = 59 = spiral Matrix problem  









// 07.
// array literal 
console.log("07. Array Literal ");
let myArrayLit = ['Man', 'Go', 'aMan'];
console.log(myArrayLit);






// 08. 
console.log("08.List of all Methods, Properties & Iterator ");

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

sort()
flat()
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

forEach

*/






// 09.
// push , pop, unshift, shift 
console.log("09. Playing with an array - push, pop, unshift, shift ");

let myarray = [40, "anurag", true, 80, undefined, 111];

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

console.log("11. slice ");
console.log(myarray);

let slice_of_arr = myarray.slice(4);
//it is taking all the value of array after index 4
console.log(slice_of_arr);
console.log(myarray);


let slice_of_arr_2 = myarray.slice(4, 6);
console.log(slice_of_arr_2);
console.log(myarray);






// 12
// splice
// syntax
// splice(startingIndex)
// splice(startingIndex, deletecount)
// splice(startingIndex, deleteCount, ItemsToAdd)
// affect orginal array 

console.log("12. ---- splice------");
console.log(myarray);

console.log(" --- splice with one parameter-------- ");
let splicedPart = myarray.splice(5);
console.log('sliced part', splicedPart);
console.log(myarray);

console.log("----- splice with two parameter------- ");
let splicedPart1 = myarray.splice(2, 0);
console.log(splicedPart1);
console.log(myarray);

console.log("------ splice with multiple parameter-----------");
let splicedPart2 = myarray.splice(3, 2, "Hello", undefined, "world", null);
console.log(splicedPart2);
console.log(myarray);






// 13
// indexOf
// lastIndexOf
// includes 

console.log('13. --------- index of -------')

console.log(myarray);

myarray[2] = 345;
myarray[3] = 345;
myarray[7] = 345;

console.log(myarray);

console.log("IndexOf - provides first index of an elements  = ");
console.log(myarray.indexOf(345));

console.log("lastIndexOf - provides last index of an elements ");
console.log(myarray.lastIndexOf(345));

console.log("include - check true or false ");
console.log(myarray.includes(345));






// 14 
// find()
console.log("14. find - will find one element that passes the condition ");
console.log(myarray);

let foundElement = myarray.find(num => num > 400);
let foundElement1 = myarray.find(num => num > 20);

let foundElement2 = myarray.find(function (num) {
    return num > 300;
});

let foundElement3 = myarray.find((num) => {
    return num > 300;
});

let foundElement4 = myarray.find((num) => num > 300);
let foundElement5 = myarray.find(num => num > 300);


console.log('--- 0----', foundElement);
console.log('----1----', foundElement1);
console.log('----2----', foundElement2);
console.log('----3----', foundElement3);
console.log('----4----', foundElement4);
console.log('----5----', foundElement5);



let found = myarray.find(function finding(num) {
    return num > 20;
})
console.log(found);



let finding = function (num) {
    return num > 20;
}
let found1 = myarray.find(finding);

console.log(found1);





// 15
// fllter 
console.log("15. filter will filter all the elements that passes the conditon ");
console.log(myarray);

let allFound = myarray.filter(num => num > 300);
console.log(allFound);
console.log(myarray);

let allFound1 = myarray.filter(function (num) {
    return num > 20;
});

let allFound2 = myarray.filter(num => {
    return num > 20;
});

console.log(allFound1);
console.log(allFound2);






// 16
// map()
// .map() is a function 
// .map() - returns a new array with operation within the function

// it is different from Map() data structure 
// Map() data structure - stores value in key - value pair 
console.log(".map() function ")
console.log(myarray);

let mapArray = myarray.map(function (number) {
    return number * 2;
});
console.log('map Array', mapArray);

let mapArray1 = myarray.map(number => number - 300);
console.log('.map()', mapArray1, 'original ', myarray);





// 17.
// reduce()
// syntax 
// .reduce (callbackfunction, initilavalue)

// callback function takes two arguments: accumulater and currentvalue
// accumalator : previous result of iteration
// currentvalue : element being iterated over

console.log("reduce () ");
const sumOfNumbers = [5, 4, 8];
console.log(sumOfNumbers);

let reduced = sumOfNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let reduced1 = sumOfNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);


let callBackFun = function (accumalator, currentValue) {
    return accumalator + currentValue;
}
let reduced2 = sumOfNumbers.reduce(callBackFun, 10);

console.log(reduced);
console.log(reduced1);
console.log(reduced2);




// 18.
// concat()
console.log('18. ------ concat------');

var array1 = ['a', 'b'];
let array2 = ["c", "d"];

let array3 = array1.concat(array2);
console.log(array3);






// 19.
console.log("19. -------- join-------");

let strArray = ["a", "b", "c", "d"];

let joined = strArray.join(); // default separator is ,
console.log(joined);

let joined1 = strArray.join("");
console.log(joined1);

let joined2 = strArray.join(" ");
console.log(joined2);

strArray = strArray.join();  // default separator is ,
console.log(strArray);





// 20.
console.log('20. ------- reverse------ ');
let reversed = [4567, "hello"].reverse();
console.log(reversed);





// 21. 
console.log("21. ------- sort-------");
let numbers = [1, 200, 60, 80, 400];

let sorted = numbers.sort((x, y) => x - y);
console.log(sorted);

let sorted1 = numbers.sort(function (x, y) {
    return x - y;
});
console.log(sorted1);

let sorted2 = numbers.sort(function (x, y) {
    return y - x;
});
console.log(sorted2);






// 21 
// flat 
console.log("21. flat")

let array7 = [6, 7, 8, [9, 10, 11, [2, 3, 5,]]];
let arrayFlated = array7.flat(2);
console.log("array 7==== ", arrayFlated);
console.log("array 7 (3) ==== ", array7.flat(3));


let array8 = [6, 7, 8, [9, 2, 3], [6, 8, 9]];
console.log('flat(1) ==== ',array8.flat(1));
console.log(array8.flat(2));




// 22
console.log("22. Javascript array with object ")
// As arrays are objects, their elements are stored as references, so when an array is copied, 
// any modification to it will also be reflected in an original array

let arr = [{ name: "john" }, { name: "Jane" }, { name: "walker" }];

let arr1 = arr;
arr1.push({ name: "Watson" });

console.log("arr1", arr1);
console.log("arr", arr);

arr[0] = { name: "Mike" };
console.log("arr", arr);
console.log("arr1", arr1);


let copyArr = [...arr];
copyArr.push({ age: 40 });

console.log("copyArr", copyArr);
console.log("arr", arr);



// 23. 
console.log("spread operators ");
/* 
   The spread operator can only be used with iterable objects, such as arrays and objects.
   The spread operator can be used with any iterable object, regardless of its type.
   The spread operator can be used to expand multiple iterable objects into a single array or object.
   The spread operator can be used to expand an iterable object into a function call.

*/




// 24.
console.log("Creating Multi dimensional array ");

let multiArray = [];

multiArray.push(["John", "Jacob"]);
multiArray.push(["Hello", "world"]);

console.log("Multi Array ", multiArray);

multiArray[2] = ["Namastey ", "code "];
console.log("updated Multi Array ", multiArray);

multiArray[2][0] = "High";
console.log("adding at specific index ", multiArray);

multiArray[2].push("Array");
console.log("2-d array ", multiArray);

multiArray[4] = "Walker";
console.log("more Updation ", multiArray);

multiArray.push("share is care ");
console.log("update again ", multiArray);






// 25.
// forEach()
console.log("Iterating over multi dimensional array ");

let multiDimen = [[23, 24, 25, 26], [112, 123]];
console.log("multiDimem", multiDimen);

multiDimen.forEach((number) => {

    number.forEach((data) => {
        console.log(data);
    });

});







// 26.
// for of 
// is used to get value
console.log("for of ");

console.log("for of - 2d array ");
for (let i of multiDimen) {

    for (let j of i) {
        console.log(j + '');
    };
};


console.log("for of - 1d array ");
for (let i of myarray) {
    console.log(i);
}







// 27.
// for in
// used to get index

console.log("for in ");
// for in not possible in 2-d array 
for (let i in multiDimen) {

    for (let j in i) {
        console.log(j);
    };
};


console.log("for in - 1d array ");
for (let i in myarray) {
    console.log(i);
};





// 28. Working of javascript 







// Q 01.

/*
 Write a function getEvenNumbers using .filter() 
 that takes an array of numbers as input and 
 returns a new array containing only the even numbers 
 from the original array.
*/

console.log("Q 01. ");

let numbersQ1 = [1, 2, 3, 4, 5, 6, 7, 8,];

console.log(getEvenNumbers(numbersQ1));
console.log(getEvenNumbers1(numbersQ1));

function getEvenNumbers(numbersQ1) {

    let answer = numbersQ1.filter(function (num) {
        return num % 2 === 0;
    })

    return answer;
}

function getEvenNumbers1(numbersQ1) {
    return numbersQ1.filter(num => num % 2 === 0);
}





// Q2.
/*
   Write a function calculateAverage using .reduce() 
   that takes an array of numbers as input and 
   returns the average of all the numbers in the array.
*/

console.log("Q 02. ");

let numbers2 = [1, 2, 3, 4, 5];

console.log(calculateAverage(numbers2));

function calculateAverage(numbers2) {
    return numbers2.reduce(function (accumalator, currentValue) {
        return accumalator + currentValue;

    }, 0) / numbers2.length;
}







// extra 01.
const myArray1 = [1, 2, 3];
console.log(Array.isArray(myArray1)); // true


const myArray2 = Array.from("hello");
console.log(myArray2); // ['h', 'e', 'l', 'l', 'o']


const myArray3 = Array.of(1, 2, 3);
console.log(myArray3); // [1, 2, 3]


const myArray4 = [1, 2, 3];
myArray4.forEach((element) => {
    console.log(element);
});








