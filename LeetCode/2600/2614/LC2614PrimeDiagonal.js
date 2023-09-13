


{
    /**
 * @param {number[][]} nums
 * @return {number}
*/


    var diagonalPrime = function (nums) {

        let largest = 0;

        for (let i = 0; i < nums.length; i++) {

            if (isPrime(nums[i][i]) && nums[i][i] > largest) {
                largest = nums[i][i];
            }


            if (i !== nums.length - 1 - i) {

                if (isPrime(nums[i][nums.length - 1 - i]) && nums[i][nums.length - 1 - i] > largest) {
                    largest = nums[i][nums.length - 1 - i];
                }

            }
        }

        return largest;

    };


    function isPrime(num) {

        if (num <= 1) {
            return false;
        }

        if (num === 2) {
            return true;
        }

        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {

            if (num % i === 0) {
                return false;
            }

        }

        return true;
    }
}













{
    /**
 * @param {number[][]} nums
 * @return {number}
*/


    var diagonalPrime = function (nums) {

        let largest = 0;
        let n = nums.length;

        for (let i = 0; i < n; i++) {

            if (isPrime(nums[i][i]) && nums[i][i] > largest) {
                largest = nums[i][i];
            }


            if (i !== nums.length - 1 - i) {

                if (isPrime(nums[i][n - 1 - i]) && nums[i][n - 1 - i] > largest) {
                    largest = nums[i][n - 1 - i];
                }

            }
        }

        return largest;

    };


    function isPrime(num) {

        if (num <= 1) {
            return false;
        }

        if (num === 2) {
            return true;
        }

        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {

            if (num % i === 0) {
                return false;
            }

        }

        return true;
    }
}














{
    // this solution is not memory efficient 

    /**
      * @param {number[][]} nums
      * @return {number}
    */


    var diagonalPrime = function (nums) {

        let largest = 0;
        let n = nums.length;

        for (let i = 0; i < n; i++) {

            if (isPrime(nums[i][i]) && nums[i][i] > largest) {
                largest = nums[i][i];
            }




            if (isPrime(nums[i][n - 1 - i]) && nums[i][n - 1 - i] > largest) {
                largest = nums[i][n - 1 - i];
            }


        }

        return largest;

    };


    function isPrime(num) {

        if (num <= 1) {
            return false;
        }

        if (num === 2) {
            return true;
        }

        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {

            if (num % i === 0) {
                return false;
            }

        }

        return true;
    }
}