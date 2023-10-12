module.exports = { insert7 };

function insert7(inputString) {
    
    let result = '';
    let countWithoutSpace = 0;


    for (let char of inputString){

        if (char !== " "){
            result += char;
            countWithoutSpace++;

            if (countWithoutSpace % 6 === 0){
                result += '7';
            }
        }
        else {
            result += char;
        }
    }

    return result;

}





console.log(insert7("Full Stack Web Development"));
// Output: "Full St7ack Web7 Develo7pment"





/*
   explanation 

   time complexity  = linear 
   space complexity = constant 


*/