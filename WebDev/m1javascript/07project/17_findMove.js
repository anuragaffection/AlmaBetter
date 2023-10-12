module.exports = { findMove };

function findMove(s) {
   
    let result = [];

    for (let i = 0; i < s.length - 1; i++){

        if (s[i] === '+' && s[i+1] === '+'){
            let newState = s.slice(0, i) + "--" + s.slice(i+2);
            result.push(newState);
        }
    }

    return result;
}





console.log(findMove('++++'));  
//  ["--++", "+--+", "++--"]

console.log(findMove('++-++'));  
//  ["---++", "++---"]






/*
   explanation 

   time complexity  = quadratic 
   space complexity = linear 


*/