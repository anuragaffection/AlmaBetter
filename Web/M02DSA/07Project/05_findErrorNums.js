module.exports = { findErrorNums };

/*
function findErrorNums(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;
    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }
    for (let i = 1; i < maxValue + 1; i++) {
        if (hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 
    return output;
};
*/

var findErrorNums = function (nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num);  // inserting duplicate 
        }
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue + 1; i++) {
        if (!hashmap.has(i)) {
            output.push(i); // inserting missing 
            break;
        }
    }
    return output;
};

const input1 = [1, 2, 2, 4];
console.log(findErrorNums(input1)); // Output: [2, 3]

const Input2 = [3, 2, 3, 4, 5];
console.log(findErrorNums(Input2)); // Output: [3, 1]

const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 8]
console.log(findErrorNums(input3)); // Output: [8, 9]

