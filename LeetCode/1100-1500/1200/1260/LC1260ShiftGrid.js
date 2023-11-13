{
    var shiftGrid = function (grid, k) {
        let m = grid.length;
        let n = grid[0].length;

        // Calculate the total number of elements in the grid
        const totalElements = m * n;

        // Calculate the effective number of shifts (k % totalElements)
        k %= totalElements;

        let mat = new Array(m).fill(0).map(() => new Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // Calculate the new position for the element at grid[i][j] after k shifts
                const newPosition = (i * n + j + k) % totalElements;
                const newI = Math.floor(newPosition / n);
                const newJ = newPosition % n;

                mat[newI][newJ] = grid[i][j];
            }
        }

        return mat;
    };

}







{
    /**
     * @param {number[][]} grid
     * @param {number} k
     * @return {number[][]}
    */

    var shiftGrid = function (grid, k) {
        var arr = grid.flat(),
            len = grid[0].length,
            res = [];

        while (k--) {
            arr.unshift(arr.pop());
        }

        while (arr.length) {
            res.push(arr.splice(0, len));
        }

        return res;
    };
}