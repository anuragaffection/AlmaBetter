{
    /**
     * @param {number[]} original
     * @param {number} m
     * @param {number} n
     * @return {number[][]}
   */

    var construct2DArray = function (original, m, n) {

        let grid = new Array(m).fill(0).map(() => new Array(n).fill(0));

        if (original.length !== m * n) {
            return [];
        }

        let k = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {

                grid[i][j] = original[k];
                k++;
            }
        }

        return grid;
    };
}