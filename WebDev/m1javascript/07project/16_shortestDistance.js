module.exports = { shortestDistance };

function shortestDistance(wordsDict, word1, word2) {

    let minDistance = wordsDict.length;

    let idx1 = -1;
    let idx2 = -1 ;

    for (let i = 0; i < wordsDict.length; i++) {

        if (wordsDict[i] === word1) {
            idx1 = i;
        }
        else if (wordsDict[i] === word2) {
            idx2 = i;
        }


        if (idx1 !== -1 && idx2 !== -1) {
            let distance = Math.abs(idx2 - idx1);
            minDistance = Math.min(minDistance, distance);
        }
    }

    return minDistance;


}





const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict1, 'coding', 'makes'));
// 1




const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
console.log(shortestDistance(wordsDict2, "apple", "fig"));
// 3










/*
   explanation 

   time complexity  = linear 
   space complexity = constant 


*/