/**
 *   You are given an m x n integer matrix matrix with the following two properties:
 * 
 *   Each row is sorted in non-decreasing order.
 *   The first integer of each row is greater than the last integer of the previous row.
 * 
 *   Given an integer target, return true if target is in matrix or false otherwise.
 *   
 *   You must write a solution in O(log(m * n)) time complexity.
*/



{
    // way 01 - brute force

    // linear * linear - concept 

    // tc = O (n * m)
    // sc = constant 

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
    */

    var searchMatrix = function (matrix, target) {

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {

                if (matrix[i][j] === target) {
                    return true;
                }
            }
        }

        return false;

    };
}





{
    // way 02 --- applying binary search in each row

    // linear * binary --- concept 

    // tc = O (n * log(m)) 
    // sc = constant 

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
    */

    var searchMatrix = function (matrix, target) {

        for (let i = 0; i < matrix.length; i++) {

            let rowLength = matrix[i].length;

            let start = 0;
            let end = rowLength - 1;

            while (start <= end) {
                let mid = start + Math.floor((end - start) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                }
                else if (matrix[i][mid] > target) {
                    end = mid - 1;
                }
                else {
                    start = mid + 1;
                }
            }
        }

        return false;

    };
}





{
    // way 03 -- most optimised - staircase concept - 
    // check  -- java dsa notes 2d array 

    // horizontal & vertical move --- concept 
    
    // tc = O (m + n) 
    // sc = 

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
    */

    var searchMatrix = function (matrix, target) {

        let row = 0;
        let column = matrix[0].length - 1;

        while (row < matrix.length && column >= 0) {

            if (matrix[row][column] === target) {
                return true;
            }
            else if (matrix[row][column] > target) {
                column--;
            }
            else {
                row++;
            }
        }

        return false;

    };
}





{
    /* 
       Way-4: Binary Search * Binary 

       tc = log (nm)
       sc = constant
    */
}