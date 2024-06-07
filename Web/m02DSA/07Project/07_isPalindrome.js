module.exports = { isPalindrome, isPalindrome2 };

function isPalindrome(n) {
    let revNum = 0;
    let dupNum = n;
    while (dupNum) {
        let remainder = dupNum % 10;
        revNum = revNum * 10 + remainder;
        dupNum = Math.floor(dupNum / 10);
    }
    if (revNum === n) {
        return true;
    }
    return false;
}


function isPalindrome2(n) {
    let stringValue = String(n);
    let len = stringValue.length;
    for (let i = 0, j = len - 1; i < Math.floor(len / 2); i++, j--) {
        if (stringValue.charAt(i) !== stringValue.charAt(j)) {
            return false;
        }
    }
    return true;
}


const input1 = 12321;
console.log(isPalindrome(input1)); // true 
console.log(isPalindrome(input1)); // true 

const input2 = 1451
console.log(isPalindrome(input2));  // false 
console.log(isPalindrome2(input2)); // false 

const input3 = 12345;
console.log(isPalindrome(input3)); // false 
console.log(isPalindrome2(input3)) // false 


/**
 * Solution 01 
 * -- Time complexity = O(n)
 * -- Space complexity = constant 
 * 
 * Solution 02 
 * -- Time complexity = O(n/2)
 * -- Space complexity = constant 
 */
