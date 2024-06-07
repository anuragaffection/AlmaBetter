module.exports = { minimumSum };

function minimumSum(num) {
    let digits = num.toString().split('');
    let sortedDigits = digits.sort((a, b) => a - b);

    let num1 = '' + sortedDigits[0] + sortedDigits[2];
    let num2 = '' + sortedDigits[1] + sortedDigits[3];

    return parseInt(num1) + parseInt(num2);
}


console.log(minimumSum(2932));  //  52
console.log(minimumSum(4009));  //  13
console.log(minimumSum(2050));  //   7 