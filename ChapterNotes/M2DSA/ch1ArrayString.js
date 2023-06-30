// arrays
// strings




// 01. 
// what is an array 




// 02. 
// Types of an array


// one dimensional 
// One-dimensional arrays are commonly used to store lists of items or sets of values.
console.log("One-d array ");
let oneD = [20, 40, 50, 60 ];
console.log(oneD);
console.log(oneD.length);
console.log(oneD[2]);


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






// 03.
// creating an array 
// Note: It is recommended to create arrays using array literals instead of other methods.

// array constructor 
// array literal 


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



// array literal 
console.log("Array Literal ");
let myArrayLit = ['Man', 'Go', 'aMan'];
console.log(myArrayLit);






// 04.
// operations on array 
console.log("List of all Methods, Properties & Iterator ");


/*

// **Array methods**

push()
pop()
shift()
unshift()
slice()
indexOf()
lastIndexOf()
concat()
join().
map()
filter()
reduce()
some()
every()


// **Array properties**

length
index


// **Array iterators**
for...of 
for...in 

*/
