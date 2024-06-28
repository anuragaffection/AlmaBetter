// Worst Case
function worstasteroidCollision(arr) {
    const result = [];

    for (let element of arr) {

        while (result.length > 0 && result[result.length - 1] > 0 && element < 0) {
            const top = result[result.length - 1];

            if (Math.abs(element) > Math.abs(top)) {
                result.pop();
            } else if (Math.abs(element) === Math.abs(top)) {
                result.pop();
                element = 0;
                break;
            } else {
                element = 0;
                break;
            }
        }
        if (element !== 0) {
            result.push(element);
        }
    }
    return result;
}



// Best Case
function bestasteroidCollision(arr) {
    const result = [];

    for (const element of arr) {
        let collision = true;

        while (result.length > 0 && result[result.length - 1] > 0 && element < 0) {
            const top = result.pop();
            
            if (Math.abs(top) === Math.abs(element)) {
                collision = false;
                break;
            } else if (Math.abs(top) > Math.abs(element)) {
                result.push(top);
                collision = false;
                break;
            }
        }
        if (collision) {
            result.push(element);
        }
    }
    return result;
}


console.log(worstasteroidCollision([5, 10, -5]));   // Output: [5, 10]
console.log(bestasteroidCollision([5, 10, -5]));   // Output: [5, 10]

console.log(worstasteroidCollision([8, -8]));       // Output: []
console.log(bestasteroidCollision([8, -8]));       // Output: []

console.log(worstasteroidCollision([10, 2, -5]));  // 10
console.log(bestasteroidCollision([10, 2, -5]));  // 10
