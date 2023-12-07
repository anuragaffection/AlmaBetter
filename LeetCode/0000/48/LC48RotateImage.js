

// Leetcode 48 rotate Image problem 







{
    /**
    * @param {number[][]} matrix
    * @return{matrix} Do not return anything, modify matrix in-place instead.
    */

    var rotate = function (matrix) {
        let n = matrix.length;

        for (let i = 0; i < n; i++) {
            
            // notes j = i 
            // finding the transpose only 
            for (let j = i; j < n; j++) {

                // Swap matrix[i][j] and matrix[j][i]
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for (let i = 0; i < n; i++) {
            // Reverse each row
            matrix[i].reverse();
        }
    };

}








{

    // will this code work
    // if we are free to return new array 


    var rotate = function (matrix) {

        let row = matrix.length;
        let col = matrix[0].length;

        let newMatrix = new Array(row).fill(0).map(() => new Array(col).fill(0));

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[0].length; j++) {

                let temp = matrix[i][j];

                newMatrix[j][col - i - 1] = temp;
            }
        }

        return newMatrix;
    };
}