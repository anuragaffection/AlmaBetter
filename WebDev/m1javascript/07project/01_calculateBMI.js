

/* 
    fix the isssue in code 


    function calculateBMI(weight, height) {


        const bmi = weight / (height * height);

        if (bmi < 18.5) {
            return "Underweight";
        }
        else if (bmi >= 18.5 || bmi < 24.9) {
            return "Normal weight";
        }
        else if (bmi >= 25 || bmi < 29.9) {
            return "Overweight";
        }
        else {
            return "Obese";
        }
        
    }



*/






function calculateBMI(weight, height) {

    let weightValue = Number(weight);
    let heightValue = Number(height);


    if (weightValue <= 0 || heightValue <= 0) {
        return "Weight & Height Must be Positive";
    }


    const bmi = weightValue / (heightValue * heightValue);


    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    }
    else {
        return "Obese";
    }

}






// Do not modify the below lines
module.exports = { calculateBMI };





console.log(calculateBMI(65, 1.75));
// Normal Weight 

console.log(calculateBMI(45, 1.60));
// Under Weight 






/*

    Weight in kg 
    Height in meter 

    Number() = will parse into number 

    formula = bmi 

    time complexity  = constant 
    space complexity = constant 

*/


