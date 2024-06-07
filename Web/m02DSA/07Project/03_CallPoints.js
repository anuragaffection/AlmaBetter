module.exports = { callPoints };

/*
function callPoints(operations) {
    for (let i = 0; i <= operations.length; i++) {
        if (operations[i] === "+") {
            sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            var integer = +operations[i];
            operations[i] = integer;
        }
    }
    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i <= operations.length; i++) {
        totalSum += operations[i];
    }
    return totalSum;
};
*/

var callPoints = function (operations) {
    if (operations.length <= 0 || operations.length > 1000) {
        return "Length should be in range 1 and 1000, both inclusive";
    }

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            let sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        }
        else if (operations[i] === "D") {
            let newD = operations[i - 1] * 2;
            operations[i] = newD;
        }
        else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        }
        else {
            let integer = +operations[i];
            operations[i] = integer;
        }
    }

    let totalSum = 0; // Calculating total sum 
    for (let i = 0; i < operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};




const ops1 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(callPoints(ops1)); // 27

const ops2 = ["5", "2", "C", "D", "+"]
console.log(callPoints(ops2)); // 30

const ops3 = ["1", "C"]
console.log(callPoints(ops3)); // 0 



/*
   +         - convert into number type 
   Number()  - convert into number type 
*/
