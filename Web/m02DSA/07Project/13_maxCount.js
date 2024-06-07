module.exports = { maxCount };

function maxCount(nums) {
    let countPos = 0, countNeg = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0) {
            countPos = nums.length - i;
            i = i + (nums.length - 1 - i);
        }
        else if (nums[i] < 0) {
            countNeg++;
        }
    }
    return Math.max(countPos, countNeg);
}

let nums1 = [-2,-1,-1,1,2,3]
console.log(maxCount(nums1)) // 3

let nums2 =  [-3,-2,-1,0,0,1,2]
console.log(maxCount(nums2)) // 3

let nums3 = [5, 20, 66, 1314];
console.log(maxCount(nums3)); // 4

/**
 * time complexity = linear 
 * space complexity = constant 
 */
