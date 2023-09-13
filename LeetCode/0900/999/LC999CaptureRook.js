{

    // brute force 

    /**
     * @param {character[][]} board
     * @return {number}
    */

    var numRookCaptures = function (board) {

        let m = board.length;
        let n = board[0].length;

        let capture = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {

                if (board[i][j] === 'R') {

                    let ri = i;
                    let rj = j;

                    for (let j = rj; j < n; j++) {
                        if (board[ri][j] === 'B') {
                            break;
                        }
                        else if (board[ri][j] === 'p') {
                            capture++;
                            break;
                        }
                    }

                    for (let j = rj; j >= 0; j--) {
                        if (board[ri][j] === 'B') {
                            break;
                        }
                        else if (board[ri][j] === 'p') {
                            capture++;
                            break;
                        }
                    }


                    for (let i = ri; i < m; i++) {
                        if (board[i][rj] === 'B') {
                            break;
                        }
                        else if (board[i][rj] === 'p') {
                            capture++;
                            break;
                        }
                    }


                    for (let i = ri; i >= 0; i--) {
                        if (board[i][rj] === 'B') {
                            break;
                        }
                        else if (board[i][rj] === 'p') {
                            capture++;
                            break;
                        }
                    }
                }
            }
        }

        return capture;

    };
}