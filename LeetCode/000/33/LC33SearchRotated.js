/**
 *  LeetCode 33. Search in Rotated Sorted Array
 * 
*/



{
    // tc = log n
    // sc = constant 

    // way 01
    // using single loop 



    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
    */


    var search = function (nums, target) {

        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {

            let mid = start + Math.floor((end - start) / 2);

            if (nums[mid] == target) {
                return mid;
            }

            else if (nums[mid] >= nums[start]) {

                if (target >= nums[start] && target < nums[mid]) {
                    end = mid - 1;
                }
                else {
                    start = mid + 1;
                }

            }
            else {

                if (target <= nums[end] && target > nums[mid]) {
                    start = mid + 1;
                }
                else {
                    end = mid - 1;
                }

            }
        }
        return -1;
    };

}





{
    // way 02 
    // same approch but using recursion 
    
    /**
      * @param {number[]} nums
      * @param {number} target
      * @return {number}
    */

    // tc = log n



    var search = function (nums, target, start = 0, end = nums.length - 1) {

        if (start > end) {
            return -1;
        }

        let mid = start + Math.floor((end - start) / 2);


        if (nums[mid] === target) {
            return mid;
        }


        if (nums[start] <= nums[mid]) {

            if (nums[start] <= target && target <= nums[mid]) {
                return search(nums, target, start, mid - 1);
            }
            else {
                return search(nums, target, mid + 1, end);
            }

        }

        else {

            if (nums[end] >= target && target >= nums[mid]) {
                return search(nums, target, mid + 1, end);
            }
            else {
                return search(nums, target, start, mid - 1);
            }

        }

    };


}