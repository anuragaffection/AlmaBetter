module.exports = { searchRange, searchRange2 };

var searchRange = function (nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            ans.push(i);
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == target) {
            ans.push(i);
            break;
        }
    }
    if (ans.length == 0) {
        ans.push(-1);
        ans.push(-1);
    }
    return ans;
};


var searchRange2 = function (nums, target) {
    let ans = [-1, -1];
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start +  Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            ans[0] = mid;
            end = mid - 1; // searching on left side 
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        let mid = start +  Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            ans[1] = mid;
            start = mid + 1;  // searching on the right side
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return ans;
};


let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)) // [3, 4]
console.log(searchRange2(nums, target))

let nums2 = [5, 7, 8, 10];
let target2 = 11;
console.log(searchRange(nums2, target2)) // [-1, -1]
console.log(searchRange2(nums2, target2))


/**
 * solution 01 
 * -- time complexity = O(n)
 * -- space complexity = O(k)
 * 
 * solution 02 
 * -- time complexity = O(log n)
 * -- space complexity = O(k)
 */