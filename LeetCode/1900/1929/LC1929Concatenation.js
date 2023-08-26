{
    /**
     * 
     * 1929. Concatenation of array
     * 

    */
}


{
    // way 01 - two for loop

    // using array constructor 

    // tc = linear
    // sc = linear 

    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
    */

    var getConcatenation = function (nums) {

        let ans = new Array();

        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }

        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }

        return ans;

    };
}





{
    // way 02 - using spread operator 

    // tc = linear
    // sc = linear 

    // spread operator - is used both for concatenation and iteration 
    // check notes

    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var getConcatenation = function (nums) {

        return [...nums, ...nums];

    };
}






{
    // way 03 - using array literal and one loop 

    // time complexity = linear 
    // space complexity = linear 

    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var getConcatenation = function (nums) {

        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[i + nums.length] = nums[i];
        }

        return ans;

    };
}





{
    // way 04 - using array literal 

    // tc = linear 
    // sc = linear 


    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var getConcatenation = function (nums) {

        let ans = [];

        for (let i = 0; i < nums.length * 2; i++) {

            if (i < nums.length) {
                ans[i] = nums[i];
            }
            else {
                ans[i] = nums[i - nums.length];
            }
        }

        return ans;

    };
}






{
    // way 05 - tripe equal too

    // tc = linear 
    // sc = linear 


    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var getConcatenation = function (nums) {

        let ans = [];

        for (let i = 0; i < nums.length; i++) {

            ans[i] = ans[i + nums.length] = nums[i];

            // first storing 
            // ans[i + nums.length]  = nums[i];

            // then 
            // ans[i] = ans[i+nums.length]

        }
        return ans;
    };
}






{
    // way 06 - pushing in same array

    // tc = linear 
    // sc = linear 

    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var getConcatenation = function (nums) {
        const len = nums.length
        for (let i = 0; i < len; i++) {
            nums.push(nums[i])
        }
        return nums;
    };
}