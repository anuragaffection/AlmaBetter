



{
    // by creating new board 


    /**
     * @param {number[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
    */


    var gameOfLife = function (board) {

        let m = board.length;
        let n = board[0].length;

        let newBoard = new Array(m).fill(null).map(() => new Array(n).fill(null));

        let directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];


        function isValid(newR, newC) {

            if (newR < m && newC < n && newR >= 0 && newC >= 0) {
                return true;
            }
        }



        for (let i = 0; i < m; i++) {

            for (let j = 0; j < n; j++) {


                let liveNeighbour = 0;

                for (let [dx, dy] of directions) {

                    let newR = i + dx;
                    let newC = j + dy;


                    if (isValid(newR, newC) && board[newR][newC] === 1) {
                        liveNeighbour++;
                    }

                }


                if (board[i][j] === 1) {

                    if (liveNeighbour < 2 || liveNeighbour > 3) {
                        newBoard[i][j] = 0;
                    }
                    else {
                        newBoard[i][j] = 1;
                    }
                }
                else {
                    if (liveNeighbour === 3) {
                        newBoard[i][j] = 1;
                    }
                }

            }
        }



        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                board[i][j] = newBoard[i][j];
            }
        }


    };
}


