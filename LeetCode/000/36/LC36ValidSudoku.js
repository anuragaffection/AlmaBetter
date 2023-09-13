
{


    /**
 * @param {character[][]} board
 * @return {boolean}
*/

    var isValidSudoku = function (board) {

        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[0].length; j++) {

                if (board[i][j] !== '.') {

                    if (isValidCell(i, j, board) === false) {
                        return false;
                    }

                }
            }
        }

        return true;

    };



    function isValidCell(row, col, board) {

        let arr = [];

        for (let i = 0; i < 9; i++) {

            if (board[row][i] !== '.') {

                if (arr.includes(board[row][i])) {
                    return false;
                }
                else {
                    arr.push(board[row][i]);
                }

            }


        }

        let arr1 = []
        for (let i = 0; i < 9; i++) {

            if (board[i][col] !== '.') {

                if (arr1.includes(board[i][col])) {
                    return false;
                }
                else {
                    arr1.push(board[i][col]);
                }

            }

        }


        let arr2 = [];
        let sr = (Math.floor(row / 3)) * 3;
        let sc = (Math.floor(col / 3)) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {

                if (board[i][j] !== '.') {

                    if (arr2.includes(board[i][j])) {
                        return false;
                    }
                    else {
                        arr2.push(board[i][j]);
                    }

                }

            }
        }

        return true;

    }


}














{


    /**
 * @param {character[][]} board
 * @return {boolean}
*/

    var isValidSudoku = function (board) {

        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[0].length; j++) {

                if (board[i][j] !== '.') {

                    if (isValidCell(i, j, board) === false) {
                        return false;
                    }

                }
            }
        }

        return true;

    };



    function isValidCell(row, col, board) {

        let arr = [];

        for (let i = 0; i < 9; i++) {

            if (board[row][i] !== '.') {

                if (arr.includes(board[row][i])) {
                    return false;
                }
                else {
                    arr.push(board[row][i]);
                }

            }


        }

        arr = []
        for (let i = 0; i < 9; i++) {

            if (board[i][col] !== '.') {

                if (arr.includes(board[i][col])) {
                    return false;
                }
                else {
                    arr.push(board[i][col]);
                }

            }

        }


        arr = [];
        let sr = (Math.floor(row / 3)) * 3;
        let sc = (Math.floor(col / 3)) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {

                if (board[i][j] !== '.') {

                    if (arr.includes(board[i][j])) {
                        return false;
                    }
                    else {
                        arr.push(board[i][j]);
                    }

                }

            }
        }


        return true;

    }

}












{
    /**
 * @param {character[][]} board
 * @return {boolean}
 */

    var isValidSudoku = function (board) {

        for (let i = 0; i < 9; i++) {

            if (!isValidRow(board, i) || !isValidColumn(board, i) || !isValidSubgrid(board, i)) {
                return false;
            }
        }
        return true;
    };


    function isValidRow(board, row) {
        const seen = new Set();
        for (let j = 0; j < 9; j++) {
            const cell = board[row][j];
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
        return true;
    }

    function isValidColumn(board, col) {
        const seen = new Set();
        for (let i = 0; i < 9; i++) {
            const cell = board[i][col];
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
        return true;
    }

    function isValidSubgrid(board, subgrid) {
        const seen = new Set();
        const startRow = Math.floor(subgrid / 3) * 3;
        const startCol = (subgrid % 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                const cell = board[i][j];
                if (cell !== '.') {
                    if (seen.has(cell)) {
                        return false;
                    }
                    seen.add(cell);
                }
            }
        }
        return true;
    }

}










