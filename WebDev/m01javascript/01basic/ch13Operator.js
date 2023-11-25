//
// Operator 
//




/**
 * in this chapter 
 *  
 * 
*/




/**
 * explore quiz 
 * 
*/



/**
 * explore coding 
 * 
*/



/**
 * explore topics 
 * --- bitwise operator && bit manipulation
 * 
*/



/**
    13. Javascript Operators
        -- Spread Operator in JavaScript (stackabuse.com)
        -- https://www.educative.io/blog/bitwise-and-javascript
        -- https://www.syncfusion.com/blogs/post 
        -- javascript-string-manipulation-techniques-every-developer-should-know.aspx
        -- https://codepip.com/games/code-crunchers/
 */






console.log("Hello Dosto");

let a = 100;
let b = 10;
let c = 2
let d = '50'







// 01.
// Assignment Operator 










// 02.
// Arithmetic Operators 


// let a = 100;
// let b = 10;
// let c = 2
// let d = '50'
console.log("Arithmetic Operators");
console.log(a + b); // 110
console.log(a - b); // 90
console.log(a * b); // 1,000
console.log(a / b); // 10
console.log(a % b); // 0
console.log(a ** c); // 10,000




// let a = 100;
// let b = 10;
// let c = 2
// let d = '50'
console.log("Playing more with Arithmetic Operators");
console.log(a + d); // 100 + '50' = 10050 as string
console.log(a - d); // 100 - '50' = 50 as Number
console.log(a * d); // 100 * '50' = 5000 as Number
console.log(a / d); // 100 / '50' = 2 as Number 
console.log(d ** c); // '50' ** 2 = 2500 
console.log(d + c); // '50' + 2 = 502 as string //concatenation
console.log(d - c); // 48
console.log(d * c); // 100
console.log(d / c); // 25
console.log(d % c); // 0



console.log("Increment Operators");
let e = 10;
console.log(e);   // print 10,  e = 10
console.log(e++); // print 10,  e = 11
console.log(e);   // print 11,  e = 11
console.log(++e); // e = 12, print 12 
console.log(e);   // e = 12, print 12



console.log("Decrement Operators");
let f = 10;
console.log(f);   // 10
console.log(f--); // 10
console.log(f);   // 9
console.log(--f); // 8
console.log(f);   // 8



console.log("Playing More with Increment, Decrement & Arithmetic Operators");
let g = 10;
console.log(g++ + g++); // 21 (10 + 11)
console.log(g);         // 12
console.log(g++ + ++g); // 26 (12 + 14)
console.log(g);         // 14
console.log(++g + g++); // 30 (15 + 15)
console.log(g);         // 16
console.log(++g + ++g); // 35 ( 17 + 18)
console.log(g);         // 18










// 03.
// comparsion operators 

console.log("Comparison Operators ");
let h = 10;
let i = "I";
let j = "10";
let k = 55;



// let h = 10;
// let k = 55;
console.log(h > k);  //false
console.log(h < k);  // true
console.log(h >= k); // false
console.log(h <= k); // true
console.log(h == k); // false
console.log(h === k); // false
console.log(h != k);  // true
console.log(h !== k); // true



// let h = 10;
// let j = "10";
console.log("Playing with Comparison Operators")
console.log(h > j);   // false
console.log(h < j);   // false
console.log(h >= j);  // true
console.log(h <= j);  // true
console.log(h == j);  // true
console.log(h === j); // false
console.log(h != j);  // false
console.log(h !== j); // true



// let h = 10;
// let i = "I";
console.log("Going extreme with Comparison Operators.")
console.log(h > i);   // f
console.log(h < i);   // f
console.log(h >= i);  // f
console.log(h <= i);  // f
console.log(h == i);  // f
console.log(h === i);  // f
console.log(h != i);   // true
console.log(h !== i);  // true










// 04.
// Logical Operators 
console.log("Logical Operators");
let l = 10;
let m = 12;
let n = 18

console.log("Logical && ");
console.log(l > m && l > n); // false 
console.log(l > m && l < n); // false 
console.log(l < m && l > n); // false 
console.log(l < m && l > n); // false 
console.log(l < m && l < n); // true

console.log("Logical || ");
console.log(l > m || l > n);  // false
console.log(l > m || l < n);  // true
console.log(l < m || l > n);  // true
console.log(l < m || l > n);  // true
console.log(l < m || l < n);  // true

console.log("Logical ! ");
console.log(!true);  // false
console.log(!false);  // true
console.log(!1);  // false
console.log(!0);  // true


console.log("Some extra comparison");
console.log(true == true); // true
console.log(true === true); // true
console.log(true == 'true'); // false
console.log(true === 'true'); // false
console.log(true == 1); // true
console.log(true == '1') // true
console.log(true === 1); // false









// 05.
// Bitwise Operator 
// bit manipulation = java dsa 02 = chapter 17
console.log("05. Bitwise Operator ");

const o = 5; // 0101 in binary
const p = 3; // 0011 in binary


// Bitwise AND
console.log(o & p); // 1 (0001 in binary)


// Bitwise OR
console.log(o | p); // 7 (0111 in binary)


// Bitwise XOR
console.log(o ^ p); // 6 (0110 in binary)


// Bitwise NOT
console.log(~o); // -6 (1010 in binary)


// Left shift
console.log(o << 1); // 10 (1010 in binary)


// Right shift 
console.log(o >> 1); // 2 (0010 in binary)
console.log(206>> 3);









console.log("Thank You from Anurag Affection");










{
    /*

       01. The assignment operator "=" is used to compare values in JavaScript.

       02. Arithmetic operators can be used to perform calculations on both numbers and strings in JavaScript.

       03. The comparison operator "===" checks for both value and type equality in JavaScript.

       04. Logical operators in JavaScript are used to combine or negate conditions.

       05. The assignment operator "+=" is used to assign the result to the left operand and then add    the value of the right operand   to    the value of the left operand.



       Answers

       False
       False
       True
       True
       False



    */
}

