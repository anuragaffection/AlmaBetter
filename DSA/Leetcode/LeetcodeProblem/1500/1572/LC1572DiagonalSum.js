




// way 01 
{

    /**
    * @param {number[][]} mat
    * @return {number}
    */


    var diagonalSum = function (mat) {

        let sum = 0;

        for (let i = 0; i < mat.length; i++) {

            for (let j = 0; j < mat[i].length; j++) {

                if (i === j) {
                    sum += mat[i][j];
                }
                else if (i === mat.length - 1 - j) {
                    sum += mat[i][j];
                }
            }
        }

        return sum

    };
}
















// way 02 
{

    /**
    * @param {number[][]} mat
    * @return {number}
    */


    var diagonalSum = function (mat) {

        let sum = 0;

        for (let i = 0; i < mat.length; i++) {

            sum += mat[i][i];

            if (i !== mat.length - 1 - i) {
                sum += mat[i][mat.length - 1 - i]
            }
        }

        return sum;

    };


}