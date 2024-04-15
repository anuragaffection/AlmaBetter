
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







// 03.
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
