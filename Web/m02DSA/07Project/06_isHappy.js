module.exports = { isHappy, isHappy2 };

function isHappy(n) {
    // helper function to calculate sum of squares of digits 
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = n;
    do {
        slow = calculateSumOfSquares(slow);
        fast = calculateSumOfSquares(calculateSumOfSquares(fast));
    } while (slow !== fast);
    return slow === 1;
}


function isHappy2(n) {
    // helper function to calculate sum of squares of digits 
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let nUpdating = n;
    let set = new Set();
    while (nUpdating !== 1) {
        nUpdating = calculateSumOfSquares(nUpdating);
        if (set.has(nUpdating)) {
            return false;
        } else {
            set.add(nUpdating);
        }
    }
    return true;
}


const n1 = 19;
console.log("soln 01 = ", isHappy(n1));
console.log("soln 02 = ", isHappy2(n1));
// Output: true

const n2 = 4;
console.log("soln 01 = ", isHappy(n2));
console.log("soln 02 = ", isHappy2(n2));
// Output : false

const n3 = 7;
console.log("soln 01 = ", isHappy(n3));
console.log("soln 02 = ", isHappy2(n3));
// Output: true


/* 
   solution 01 
   -- Floyd's cycle-finding algorithm (tortoise and hare approach)
   -- Time complexity = O(k log n)
   -- Space complexity = O(1)

   solution 02
   -- using set of to finding the duplicate or cycle 
   -- time complexity = O (k)
   -- space complexity = O (k)
*/