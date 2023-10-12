module.exports = { checkSign };

function checkSign(num1, num2, num3) {

    let numbers = [num1, num2, num3];
    let countPositive = 0;
    let countNegative = 0;


    for (let num of numbers) {

        if (num > 0) {
            countPositive++;
        }
        else if (num < 0) {
            countNegative++;
        }
    }



    if (countPositive === 3) {
        return "+++";
    }
    else if (countPositive === 2 && countNegative === 1) {
        return "++-";
    }
    else if (countPositive === 1 && countNegative === 2) {
        return "+--";
    }
    else if (countNegative === 3) {
        return "---";
    }
    else {
        return "this should not be the case";
    }

}




console.log(checkSign(2, 5, 7));
// Output: "+++"

console.log(checkSign(2, 5, -7));
// output : "++-"






/*
   explanation 

   time complexity  = constant 
   space complexity = constant 


*/