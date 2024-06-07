// solution 01 

function titleCase(sentence) {
	
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');

}








// solution 02 

function titleCase2(sentence) {

    const words = sentence.toLowerCase().split(' ');

    let resultArr = words.map( 
        (word) => word[0].toUpperCase() + word.substring(1) 
        );

    return resultArr.join(' ');

}






// Do not modify the below lines
module.exports = { titleCase };





let input = "Dream big, work hard, and stay focused";

console.log("solution 01 = ", titleCase(input));
// Output: "Dream Big, Work Hard, And Stay Focused"

console.log("solution 02 = ", titleCase2(input));
// Output: "Dream Big, Work Hard, And Stay Focused"








/*
   Explanation 



   Solution 01 

   --- toLowerCase()
   --- split()
   --- toUpperCase()
   --- substring 
   --- join()

   --- for loop 

   --- time complexity  = quadratic 
   --- space complexity = linear 






   Solution 02 

   --- toLowerCase()
   --- split()
   --- toUpperCase()
   --- substring 
   --- join()

   --- map()

   --- time complexity  = linear 
   --- space complexity = linear 


*/