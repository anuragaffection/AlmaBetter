{
    /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/

    var setZeroes = function (matrix) {

        let m = matrix.length;
        let n = matrix[0].length;

        let zeroRow = new Set();
        let zeroCol = new Set();


        for (let i = 0; i < m; i++) {

            for (let j = 0; j < n; j++) {

                if (matrix[i][j] === 0) {
                    zeroRow.add(i); // storing index 
                    zeroCol.add(j); // storing index 
                }
            }
        }

        zeroRow.forEach(row => {
            for (let j = 0; j < n; j++) {
                matrix[row][j] = 0;
            }
        })

        zeroCol.forEach(col => {
            for (let i = 0; i < m; i++) {
                matrix[i][col] = 0;
            }
        })

    };
}