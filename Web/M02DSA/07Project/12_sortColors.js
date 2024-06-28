module.exports = { sortColors };

function sortColors(nums) {
    let redPtr = 0, whitePtr = 0, bluePtr = nums.length - 1;
    while (whitePtr <= bluePtr) {
        let color = nums[whitePtr];
        if (color === 0) {
            nums[whitePtr] = nums[redPtr];
            nums[redPtr] = color;
            redPtr++;
            whitePtr++;
        }
        else if (color === 1) {
            whitePtr++;
        }
        else {
            nums[whitePtr] = nums[bluePtr];
            nums[bluePtr] = color;
            bluePtr--;
        }
    }
    return nums;
    // time complexity = O (n)
    // space complexity = constant 
}


function sortColors2(nums) {
    return nums.sort((a, b) => a - b);
    // time complexity = O (n log n)
}

let nums1 = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums1));
console.log(sortColors2(nums1));

let nums2 = [2, 0, 1];
console.log(sortColors(nums2));
console.log(sortColors2(nums2));
