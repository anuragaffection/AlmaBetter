


{
    /**
 * @param {number[][]} matrix
 * @return {number[]}
*/


    var spiralOrder = function (matrix) {


        let newArray = new Array();

        let startRow = 0;
        let endRow = matrix.length - 1;

        let startCol = 0;
        let endCol = matrix[0].length - 1;



        while (startRow <= endRow && startCol <= endCol) {

            for (let i = startCol; i <= endCol; i++) {
                newArray.push(matrix[startRow][i]);
            }



            for (let i = startRow + 1; i <= endRow; i++) {
                newArray.push(matrix[i][endCol])
            }



            for (let i = endCol - 1; i >= startCol; i--) {
                if (startRow === endRow) {
                    break;
                }
                newArray.push(matrix[endRow][i]);
            }



            for (let i = endRow - 1; i >= startRow + 1; i--) {
                if (startCol === endCol) {
                    break;
                }
                newArray.push(matrix[i][startCol])
            }

            startRow++;
            endRow--;

            startCol++;
            endCol--;


        }

        return newArray;

    };
}






{

    // this is incorrec code
    // why it is failing in when m not equal to n
    /**
 * @param {number[][]} matrix
 * @return {number[]}
*/


    var spiralOrder = function (matrix) {


        let newArray = new Array();

        let startRow = 0;
        let endRow = matrix.length - 1;

        let startCol = 0;
        let endCol = matrix[0].length - 1;



        while (startRow <= endRow && startCol <= endCol) {


            for (let i = startCol; i <= endCol; i++) {
                newArray.push(matrix[startRow][i]);
            }
            startRow++;



            for (let i = startRow; i <= endRow; i++) {
                newArray.push(matrix[i][endCol])
            }
            endCol--;



            for (let i = endCol; i >= startCol; i--) {
                if (startRow === endRow) {
                    break;
                }
                newArray.push(matrix[endRow][i]);
            }
            endRow--;



            for (let i = endRow; i >= startRow; i--) {
                if (startCol === endCol) {
                    break;
                }
                newArray.push(matrix[i][startCol])
            }
            startCol++;

        }

        return newArray;

    };
}