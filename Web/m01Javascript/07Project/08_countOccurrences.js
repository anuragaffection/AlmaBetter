// solution 01 

function countOccurrences(str, char) {
    
    let count = 0;

    for (const c of str) {

        if (c === char) {
            count++;
        }
    }

    return count;
}








// solution 02 

function countOccurrences2 (str, char) {

    let newStr = str.split(char).join('');

    return str.length - newStr.length;

}






// Do not modify the below lines
module.exports = { countOccurrences };






console.log("soln 01 = ", countOccurrences('hello World', "l"));
// 3

console.log("soln 02 = " , countOccurrences2('hello World', "l"));
// 3







/*
   Explanation 


   
   solution 01 
   --- for of 
   --- time complexity  = linear 
   --- space complexity = constant 





   solution 02 
   -- split()
   -- join()
   --- time complexity  = linear 
   --- space complexity = constant 


*/