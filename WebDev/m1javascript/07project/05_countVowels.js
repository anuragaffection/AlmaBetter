function countVowels(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;


    for (let i = 0; i < lowerStr.length; i++) {

        if ( vowels.includes(lowerStr[i]) ) {
            count++;
        } 
    }

    return count;

}






// Do not modify the below lines
module.exports = { countVowels };





console.log(countVowels("AlmaBetter"));
// Output: 4

console.log(countVowels("Coding is fun with fellow learners"));
// Output: 10





/*
   Explanation 
    
   for loop 
   toLowerCase() 
   length         
   includes()    

   time complexity  = linear = 5n
   space complexity = constant 

*/