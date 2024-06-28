
// 01. What  is functional Programming
// 02. Pure functions 
// 03. First class objects 
// 04. Higher order functions 





// 05. function composition

const double = x => x * 2
const square = x => x * x


// function compostion using compose 
// compose use .reduceRight()
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
var output_final = compose(square, double)(2);
console.log(output_final); // 16


// function composition using pipe
// pip use .reduce()
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
var output_final_pipe = pipe(square, double)(2);
console.log(output_final_pipe); // 8






// 06. Immutability in javascript
// 07. Declarative & imperative
// 08. Benefits of functional Programming




// Task 01 :  leap year logic 
function isLeapYear(year) {
    // Leap years are divisible by 4
    // But if a year is divisible by 100, it must also be divisible by 400 to be a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}




// task 02 : to lowercase without toLowerCase()
var toLowerCase = function (str) {
    let ans = ""
    for (let character of str) {
        let n = character.charCodeAt()
        ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : character;
    }
    return ans
};
console.log(toLowerCase("Anurag"));




// task 03 : length of last word 
var lengthOfLastWord = function (s) {
    let length = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] !== ' ') {
            length++;
        }
        else length = 0;
    return length;
};
console.log(lengthOfLastWord("My name is Anurag Affection"));

