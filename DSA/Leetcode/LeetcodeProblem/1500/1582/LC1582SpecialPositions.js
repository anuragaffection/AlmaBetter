



{
    // way 01
    // brute force 


    /**
     * @param {number[][]} mat
     * @return {number}
   */
  
    var numSpecial = function (mat) {

        let count = 0;

        for (let i = 0; i < mat.length; i++) {

            for (let j = 0; j < mat[0].length; j++) {

                if (mat[i][j] === 1 && isSpecial(i, j, mat)) {
                    count++;
                }
            }
        }

        return count;

    };

    function isSpecial(row, col, mat) {

        for (let i = 0; i < mat.length; i++) {

            if (mat[i][col] !== 0 && i !== row) {
                return false;
            }
        }

        for (let j = 0; j < mat[0].length; j++) {

            if (mat[row][j] !== 0 && j !== col) {
                return false;
            }
        }

        return true;
    }
}