


{

    // way 01 
    // brute force
    // very terrible time complexity 

    // time complexity = O (n^2)
    // space complexity  = Constant 



    /**
     * @param {number[]} nums
     * @return {number}
    */


    var majorityElement = function (nums) {

        let mainCount = 0;

        for (let i = 0; i < nums.length; i++) {

            let count = 0;

            for (let j = 0; j < nums.length; j++) {

                if (nums[i] === nums[j]) {
                    count++;
                }

            }

            if (count > Math.floor(nums.length / 2) && count > mainCount) {
                return nums[i];
            }
        }
    };


}






{
    /**
     * @param {number[]} nums
     * @return {number}
    */

    // time complexity = n log n
    // space complexity = n

    var majorityElement = function (nums) {

        nums.sort((a, b) => a - b);

        return nums[Math.floor(nums.length / 2)];
    };
}




{

    // time complexity = O (n)
    // space complexity = n / 2


    /**
     * @param {number[]} nums
     * @return {number}
    */


    var majorityElement = function (nums) {

        let obj = {};


        for (let i of nums) {

            if (!obj[i]) {
                obj[i] = 1;
            }
            else {
                obj[i]++;
            }

            if (obj[i] > Math.floor(nums.length / 2)) {
                return i;
            }

        }


    };
}





{
    /**
     * @param {number[]} nums
     * @return {number}
    */


    var majorityElement = function (nums) {

        // many solutions are possible 
        // other type of solutions link in description 
        // using brute force 
        // using sorting 
        // using object 


        // here we are going to solve using map 

        let map = new Map();

        for (let i of nums) {

            if (!map.has(i)) {
                map.set(i, 1);
            }

            else {
                map.set(i, map.get(i) + 1);
            }

            if (map.get(i) > Math.floor(nums.length / 2)) {
                return i;
            }
        }


    };
}