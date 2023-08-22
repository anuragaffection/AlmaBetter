


{
    // easily possible with .sort()
    // but we have to do witout sorting 

    // way 01
    // descending order

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
    */


    var findKthLargest = function (nums, k) {

        nums.sort((a, b) => b - a);

        return nums[k - 1];

    };
}




{
    // way 02
    // ascending order 

    // tc = n log n


   /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
   */


    var findKthLargest = function (nums, k) {

        nums.sort((a, b) => a - b);

        return nums[nums.length - k];

    };
}