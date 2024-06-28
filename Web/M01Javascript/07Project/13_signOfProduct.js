/*
    Write a JavaScript function signOfProduct that 
    takes an array of integers as input and returns 
    the sign of the product of all the integers in the array.

    The function should return one of the following values:
    1 if the product is positive.
    1 if the product is negative.
    0 if the product is zero.

    Implement the function efficiently, 
    without actually computing the product.

*/



module.exports = { signOfProduct };

function signOfProduct(nums) {

    let countNegative = 0;
    
    for (let num of nums){

        if (num === 0){
            return 0;
        }
        else if (num < 0){
            countNegative++;
        }
    }

    return countNegative % 2 === 0 ? 1 : -1;
}





console.log(signOfProduct([2, -3, 5, 4]));
// Output: -1

console.log(signOfProduct([2, 3, 4, 5]));
// output : 1





/*
   explanation 

   for of loop 
   ternary operator 

   time complexity  = linear 
   space complexity = constant 


   my approach 
   --- if found 0, return zero 
   --- counted the negative integers 
   --- if count divisible by 2, then 1
   --- if not then -1 


*/
