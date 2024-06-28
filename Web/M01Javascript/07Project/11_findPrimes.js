/*
    Write a JavaScript function findPrimes that 
    takes a positive integer n as input and 
    returns an array of prime numbers less than 
    or equal to n.
*/



module.exports = { findPrimes };

function findPrimes(n) {

    let number = Number(n);
    let primeArray = [];


    function isPrime(num){

        if (num === 2){
            return true;
        }
        else {
            for (let i = 2; i <= Math.sqrt(num); i++){
                if (num % i === 0){
                    return false;
                }
            }
        }
        return true;
    }



    if (number <= 1) {
        return ["Prime Number is Not Possible "];
    }
    else {
        for (let i = 2; i <= n; i++) {            
            if (isPrime(i)){
                primeArray.push(i);
            }
        }
    }

    return primeArray;
}





console.log(" Prime Numbers : ",findPrimes(20));
//  [2, 3, 5, 7, 11, 13, 17, 19]

console.log(" Prime Numbers : ",findPrimes(11));
//  [ 2, 3, 5, 7, 11 ]






/*
   explanation 

   time complexity  = quadratic = n * sqrt(n)
   space complexity = linear 


   My approach 
   --- iterating all numbers 
   --- checking prime or not 
   --- if prime , then push 


*/