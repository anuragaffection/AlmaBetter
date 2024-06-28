module.exports = { findPeakElement };

function findPeakElement(nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid - 1] < nums[mid] && (nums[mid + 1] < nums[mid])) {
            break;
        }

        if (mid > 0 && nums[mid - 1] > nums[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return mid;
}




let nums1 = [1, 2, 3, 1];
console.log(findPeakElement(nums1)) // index = 2

let nums2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums2)) // index = 1 or 5

let nums3 = [1, 2, 1, 3, 5, 6, 8];  // index  = 6 or 1 
console.log(findPeakElement(nums3))

let nums4 = [4, 6, 5, 3, 1, 2, 1];  // index = 1 or 5
console.log(findPeakElement(nums4))

/**
 * time complexity = O (log n) 
 * space complexity = O (1)
 */