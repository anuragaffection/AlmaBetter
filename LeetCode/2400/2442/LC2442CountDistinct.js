

{
    /**
 * @param {number[]} nums
 * @return {number}
*/

    var countDistinctIntegers = function (nums) {


        let len = nums.length;

        for (let i = 0; i < len; i++) {
            let reversed = reverse(nums[i]);
            nums.push(reversed);
        }

        let set = new Set(nums);
        return set.size;

    };



    function reverse(number) {

        let reverseNumber = 0;

        while (number > 0) {

            let lastDigit = number % 10;
            number = Math.floor(number / 10);

            reverseNumber = reverseNumber * 10 + lastDigit;
        }

        return reverseNumber;
    }
}






{
    /**
     * this was my code and here a lot of mistake
     * 
     * 
    */


    /**
     * @param {number[]} nums
     * @return {number}
    */

    var countDistinctIntegers = function (nums) {

        // given array are already an array of positive integers
        nums = nums.map(function (element) {
            return Number(element);
        });

        let len = nums.length;

        for (let i = 0; i < len; i++) {

            // biggest mistake  
            // 
            reverse(nums[i]);

            // here this will push original array element, not reversed 
            // check - pass by value or reference concept 
            nums.push(nums[i]);
        }

        // also here spreading is not necessary.
        let set = new Set(...nums);
        return set;

    };

    function reverse(number) {

        let reverseNumber = 0;

        // mistake 
        while (number >= 0) {

            let lastDigit = number % 10;
            number = number / 10;

            reverseNumber = reverseNumber * 10 + lastDigit;
        }

        return reverseNumber;
    }
}