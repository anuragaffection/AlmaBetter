// which solution is more optimised 
// check at your own 



{

    // way 01 


    /**
    * @param {number[]} nums
    * @return {number[]}
    */
    var buildArray = function (nums) {

        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[nums[i]];
        }

        return ans;

    };
}







{
    // way 02 


    /**
    * @param {number[]} nums
    * @return {number[]}
    */

    var buildArray = function (nums) {

        return nums.map(function (element) {
            return nums[element];
        });

    };
}



{
    // way 02 = in other style 
    // using anonymous function 

    var buildArray = function (A) {
        
        return A.map((e) => A[e]);
    };
}






{
    // way 03 

    // this is more optimised than other 


    /**
    * @param {number[]} nums
    * @return {number[]}
    */

    // here important concept 

    // here, map is taking two parameters, element & i
    // where are not using element parameters 

    // by default the first parameters of map is must , it will treat as the elements in an array

    var buildArray = function (nums) {

        return nums.map(function (element, i) {
            return nums[nums[i]];
        });

    };
}





{
    // way 04
    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var buildArray = function (nums) {

        let ans = [];

        nums.forEach((element, i) => {
            ans.push(nums[nums[i]]);
        });

        return ans;
    };
}







{
    // way 05

    /**
     * @param {number[]} nums
     * @return {number[]}
    */

    var buildArray = function (nums) {

        let ans = [];

        nums.forEach((element) => {
            ans.push(nums[element]);
        });

        return ans;
    };
}