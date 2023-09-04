



{
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
    */

    var transpose = function (matrix) {

        let row = matrix.length;
        let col = matrix[0].length;

        let newMat = [];


        for (let i = 0; i < col; i++) {

            let inner = [];

            for (let j = 0; j < row; j++) {
                inner.push(matrix[j][i])
            }
            newMat.push(inner);
        }

        return newMat;
    };
}