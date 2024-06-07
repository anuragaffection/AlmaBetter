module.exports = { isPowerOfTwo };

/*
function isPowerOfTwo(n) {
    return n > 0 || (n & (n - 1)) === 0;
}
*/

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(0));  // false 
console.log(isPowerOfTwo(64)); // true 
console.log(isPowerOfTwo(5));  // false 
console.log(isPowerOfTwo(1));  // true 

/*
   && - logical and 
   &  - binary and 

   n = 8 = 1000
   n = 7 = 0111 
   
   8 & 7 = 0
*/
