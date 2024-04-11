



{
    var largestLocal = function (grid, count = 2) {
        let n = grid.length
        let arr = []
        for (let i = 0; i < n - 1; i++)    arr[i] = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                arr[i][j] = Math.max(grid[i][j], Math.max(grid[i][j + 1], Math.max(grid[i + 1][j], grid[i + 1][j + 1])))
            }
        }
        return --count == 0 ? arr : largestLocal(arr, count)
    };
}








{
    /**
 * @param {number[][]} grid
 * @return {number[][]}
 */
    var largestLocal = function (grid) {
        // declare (n-2 x n-2) matrix
        const matrix = new Array(grid.length - 2).fill(0)
            .map(() => new Array(grid[0].length - 2).fill(0));

        for (let i = 0; i < grid[i].length - 2; i++) {
            for (let j = 0; j < grid.length - 2; j++) {

                //find the max in each 3x3 martix
                matrix[i][j] = Math.max(
                    grid[i][j], grid[i][j + 1], grid[i][j + 2],
                    grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                    grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
                );

            }
        }

        return matrix;
    };
}













{

    // this solution is wrong, this was my first approach 



    /**
     * @param {number[][]} grid
     * @return {number[][]}
    */


    var largestLocal = function (grid) {

        let n = grid.length;

        let matrix = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));


        function largest(row, col) {

            let largest = grid[row][col];

            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    if (grid[i][j] > largest) {
                        largest = grid[i][j];
                    }

                }
            }
            return largest;
        }


        function print(largest) {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                    matrix[i][j] = largest;
                }
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                let large = largest(i, j);
                print(large);

            }
        }


        return matrix;

    };
}