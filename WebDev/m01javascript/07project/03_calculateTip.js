function calculateTip(billAmount, tipPercentage) {

    let billAmountValue = Number(billAmount);
    let tipPercentageValue = Number(tipPercentage);


    if (tipPercentageValue <= 0 || tipPercentageValue >= 1) {
        return "tipPercentage must be in between 0 and 1";
    }

    
    const tipAmount = billAmountValue * tipPercentageValue;
    const totalAmount = billAmountValue + tipAmount;

    return Number(totalAmount.toFixed(2));

}





// Do not modify the below lines
module.exports = { calculateTip };




console.log(calculateTip(60.75, 0.25));
// Output: 75.94

console.log(calculateTip(90.00, 0.10))
// Output: 99





/*

    Number()  = will parse into number 
    toFixed() = will strict to two decimal 

    time complexity  = constant 
    space complexity = constant 

*/