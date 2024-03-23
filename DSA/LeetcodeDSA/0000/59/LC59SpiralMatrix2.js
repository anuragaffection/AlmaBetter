// Leetcode 59 spiral Matrix 2




{
    // way 01 


    /**
    * @param {number} n
    * @return {number[][]}
    */

    var generateMatrix = function (n) {

        let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

        let count = 1;

        let rowStart = 0;
        let rowEnd = n - 1;

        let colStart = 0;
        let colEnd = n - 1;


        while (rowStart <= rowEnd && colStart <= colEnd) {

            for (let i = colStart; i <= colEnd; i++) {
                matrix[rowStart][i] = count++;
            }
            rowStart++;

            for (let i = rowStart; i <= rowEnd; i++) {
                matrix[i][colEnd] = count++;
            }
            colEnd--;

            for (let i = colEnd; i >= colStart; i--) {
                matrix[rowEnd][i] = count++;
            }
            rowEnd--;

            for (let i = rowEnd; i >= rowStart; i--) {
                matrix[i][colStart] = count++;
            }
            colStart++;

        }

        return matrix;

    };
}