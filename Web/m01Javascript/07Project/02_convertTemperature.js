
function convertTemperature(temperature, unit) {

    let temperatureValue = Number(temperature);


    if (unit === "C") {       
        const fahrenheit = ( temperatureValue / 5 ) * 9 + 32;
        return fahrenheit.toFixed(2) + " F";
       
    } 
    else if (unit === "F") {
        const celsius = ( ( temperatureValue - 32 ) * 5 ) / 9;
        return celsius.toFixed(2) + " C";
           
    } 
    else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }

}




// Do not modify the below lines
module.exports = { convertTemperature };





console.log(convertTemperature(25, "C"));
// "77.00 F"

console.log(convertTemperature(-40, "F"));
//  "-40.00 C"




/*
    Number()  = will parse into number 
    toFixed() = will strict to two decimal 
    
    formula = fahrenheit to celsius 
    formula = celsius to fahrenheit 

    time complexity  = constant 
    space complexity = constant 


*/
