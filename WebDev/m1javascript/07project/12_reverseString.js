/* 
    Write a JavaScript function reverseString that 
    takes a string as input and returns 
    the string with its characters reversed.

*/


module.exports = { reverseString };

function reverseString(str) {

    return str.split('').reverse().join('');

}




console.log(reverseString("JavaScript"));
// Output: "tpircSavaJ"






/*
   explanation 

   split()
   reverse()
   join()

   time complexity  = linear 
   space complexity = linear 


   
   my approach 
   --- first converting to array 
   --- reversing 
   --- again converting to string 


*/