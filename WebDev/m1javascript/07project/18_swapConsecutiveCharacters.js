module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {

    let strArray = str.split('');

    for (let i = 0; i < strArray.length; i += 2) {

        let temp = strArray[i];
        strArray[i] = strArray[i + 1];
        strArray[i + 1] = temp;

    }

    return strArray.join('');

}





console.log(swapConsecutiveCharacters('abcdef'));    
//  badcfe

console.log(swapConsecutiveCharacters('AlmaBetter')); 
//  lAameBttre

console.log(swapConsecutiveCharacters('123'));    
//  213 







/*
   explanation 

   time complexity  = linear 
   space complexity = 


*/