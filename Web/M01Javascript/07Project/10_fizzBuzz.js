
// solution 01 

function fizzBuzz(n) {

    const result = [];

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            result.push("Fizz");
        } 
        else if (i % 4 === 0) {
            result.push("Buzz");
        } 
        else {
            result.push(i.toString());
        }
    }

    return result;
}










// solution 02 

function fizzBuzz2(n) {

    let num = Number(n);

    const result = [];

    for (let i = 1; i <= num; i++) {

        switch (true) {

            case i % 3 === 0 && i % 4 === 0: result.push("FizzBuzz");
                break;

            case i % 3 === 0: result.push("Fizz");
                break;

            case i % 4 === 0: result.push("Buzz");
                break;

            default: result.push(i.toString());
        }
    }

    return result;
}







// Do not modify the below lines
module.exports = { fizzBuzz };




console.log("soln 01 = ", fizzBuzz(5));
//  ["1", "2", "Fizz", "Buzz", "5"]

console.log("soln 01 = ", fizzBuzz2(5));
//  ["1", "2", "Fizz", "Buzz", "5"]









/*
   Explanation 

   

   Solution 01 
   -- for loop  
   -- if else if 
   -- time complexity  = linear 
   -- space complexity = linear 





   Solution 02 
   -- for loop 
   -- switch statements 
   -- time complexity  = linear 
   -- space complexity = linear 

*/