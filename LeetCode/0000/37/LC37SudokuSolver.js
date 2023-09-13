

// note - all are wrong solution, i have to find the error in each of the solution , 




/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
*/

var solveSudoku = function (board) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] === '.') {
                fillSudoku(i, j, board);

            }
        }
    }

    //return board;

};


function fillSudoku(row, col, board) {

    for (let digit = 1; digit <= 9; digit++) {

        if (digitSafe(row, col, board, digit)) {
            board[row][col] = digit;
        }
    }
}


function digitSafe(row, col, board, digit) {

    for (let i = 0; i < 9; i++) {
        if (board[row][i] === digit) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (board[i][col] === digit) {
            return false;
        }
    }

    let sr = (Math.floor(row / 3)) * 3;
    let sc = (Math.floor(col / 3)) * 3;

    for (let i = sr; i < sr + 3; i++) {
        for (let j = sc; j < sc + 3; j++) {
            if (board[i][j] === digit) {
                return false;
            }
        }
    }

    return true;
}








{
    /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
*/

    var solveSudoku = function (board) {

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {

                if (board[i][j] === '.') {
                    fillSudoku(i, j, board);

                }
            }
        }

        return board;

    };


    function fillSudoku(row, col, board) {

        for (let digit = 1; digit <= 9; digit++) {

            if (digitSafe(row, col, board, digit)) {
                board[row][col] = digit;
            }
        }
    }


    function digitSafe(row, col, board, digit) {

        for (let i = 0; i < 9; i++) {
            if (board[row][i] === digit) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (board[i][col] === digit) {
                return false;
            }
        }

        let sr = (Math.floor(row / 3)) * 3;
        let sc = (Math.floor(col / 3)) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {
                if (board[i][j] === digit) {
                    return false;
                }
            }
        }

        return true;
    }
}









{
    /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

    var solveSudoku = function (board) {
        // Helper function to check if a digit is safe to place in a cell
        function isSafe(row, col, num) {
            // Check the row
            for (let i = 0; i < 9; i++) {
                if (board[row][i] === num) return false;
            }
            // Check the column
            for (let j = 0; j < 9; j++) {
                if (board[j][col] === num) return false;
            }
            // Check the 3x3 subgrid
            const subgridRow = Math.floor(row / 3) * 3;
            const subgridCol = Math.floor(col / 3) * 3;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[subgridRow + i][subgridCol + j] === num) return false;
                }
            }
            return true;
        }

        // Helper function to solve the Sudoku puzzle
        function solve() {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (board[row][col] === '.') {
                        for (let num = '1'; num <= '9'; num++) {
                            if (isSafe(row, col, num)) {
                                board[row][col] = num; // Place the digit temporarily
                                if (solve()) return true; // Recursively try to solve
                                board[row][col] = '.'; // If it doesn't lead to a solution, backtrack
                            }
                        }
                        return false; // No valid digit found, backtrack
                    }
                }
            }
            return true; // All cells are filled, the puzzle is solved
        }

        // Start solving from the top-left cell
        solve();
    };

    // Example usage:
    const sudokuBoard = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    solveSudoku(sudokuBoard);

    // Output: The Sudoku board will be modified in-place with the solution.

}






{
    /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

    var solveSudoku = function (board) {
        const rows = new Array(9).fill(0).map(() => new Set());
        const cols = new Array(9).fill(0).map(() => new Set());
        const boxes = new Array(9).fill(0).map(() => new Set());

        // Initialize sets with known values and check for conflicts
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                if (cell !== '.') {
                    if (rows[i].has(cell) || cols[j].has(cell) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell)) {
                        return; // Invalid Sudoku puzzle
                    }
                    rows[i].add(cell);
                    cols[j].add(cell);
                    boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
                }
            }
        }

        // Helper function to check if a digit can be placed in a cell
        function canPlaceDigit(row, col, digit) {
            return !rows[row].has(digit) && !cols[col].has(digit) && !boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(digit);
        }

        // Iterate until no further progress can be made
        let progress = true;
        while (progress) {
            progress = false;
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (board[i][j] === '.') {
                        const candidates = [];
                        for (let digit = '1'; digit <= '9'; digit++) {
                            if (canPlaceDigit(i, j, digit)) {
                                candidates.push(digit);
                            }
                        }
                        if (candidates.length === 1) {
                            board[i][j] = candidates[0];
                            rows[i].add(candidates[0]);
                            cols[j].add(candidates[0]);
                            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(candidates[0]);
                            progress = true;
                        }
                    }
                }
            }
        }
    };

    // Example usage:
    const sudokuBoard = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    solveSudoku(sudokuBoard);

    // Output: The Sudoku board will be modified in-place with the solution if one exists.

}