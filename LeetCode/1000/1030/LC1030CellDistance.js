{
    /**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
    var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {

        let res = [];

        for (let i = 0; i < rows; i++) {

            for (let j = 0; j < cols; j++) {

                res.push([i, j]);
            }
        }

        res.sort((a, b) => Math.abs(rCenter - a[0]) + Math.abs(cCenter - a[1]) - Math.abs(rCenter - b[0]) - Math.abs(cCenter - b[1]));

        return res;

    };
}