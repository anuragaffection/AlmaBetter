/**
 * 
 * 
 *  LeetCode 240 Search Matrix 2
 * 
*/










// solution 01
{
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
    */

    var searchMatrix = function (matrix, target) {

        if (matrix.length === 0) {
            return false;
        }

        let start = 0;
        let end = matrix[0].length - 1;

        while (start <= matrix.length - 1 && end >= 0) {

            if (matrix[start][end] === target) {
                return true;
            }
            else if (matrix[start][end] < target) {
                start++;
            }
            else if (matrix[start][end] > target) {
                end--;
            }
        }

        return false;

    };
}












// solution 02
{
    /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */



    var searchMatrix = function (matrix, target) {

        let start = 0;
        let end = matrix[0].length - 1;

        while (start <= matrix.length - 1 && end >= 0) {

            if (matrix[start][end] === target) {
                return true;
            }
            else if (matrix[start][end] < target) {
                start++;
            }
            else if (matrix[start][end] > target) {
                end--;
            }
        }

        return false;

    };

    // thank you
    // this is the optimised solution 
    // all the very best 
}
