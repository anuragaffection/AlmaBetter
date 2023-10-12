function isPalindrome(str) {

    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
    
}



// Do not modify the below lines
module.exports = { isPalindrome };



console.log(isPalindrome('Hello'));
// false

console.log(isPalindrome('RaceCar'));
// true 






/*
   Explanation 

   replace()     
   toLowerCase() 
   split()       
   reverse()     
   join()        

   use of regex  

   time complexity  = linear 
   space complexity = linear 


*/