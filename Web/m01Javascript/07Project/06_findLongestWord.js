/*
    Write a JavaScript function called findLongestWord 
    that takes a sentence (string) as input and determines 
    the length of the longest word within the sentence.

    Rewrite the above code using for…of loop.
*/





// solution 01 

function findLongestWord(sentence) {

    const words = sentence.split(' ');
    let maxLength = 0;

    
    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;

        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;

}








// solution 02 

function findLongestWord2(sentence){

    const words = sentence.split(' ');
    let maxLength = 0;


    for(let word of words){
        const length = word.length;

        if (length > maxLength) {
            maxLength = length
        }
    }

    return maxLength;

}







// Do not modify the below lines
module.exports = { findLongestWord };







const inputSentence = "Coding is fun with fellow learners";

console.log("solution 01 = ", findLongestWord(inputSentence));
// 8

console.log("solution 02 = ", findLongestWord2(inputSentence));
// 8








/*
   Explanation 
   
   
   
   Solution 01 

   --- split()
   --- length
   --- for loop 

   --- time complexity = 
   --- space complexity = 





   Solution 02 

   --- split()
   --- length
   --- for of loop 

   --- time complexity = 
   --- space complexity = 



*/

