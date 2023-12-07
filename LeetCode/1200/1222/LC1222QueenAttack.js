{

    function queensAttacktheKing(queens, king) {
        const board = Array.from({ length: 8 }, () => Array(8).fill(false));
        const result = [];

        for (const [x, y] of queens) {
            board[x][y] = true;
        }

        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1],
            [-1, -1], [-1, 1], [1, -1], [1, 1]
        ];

        for (const [dx, dy] of directions) {
            let x = king[0];
            let y = king[1];

            while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                if (board[x][y]) {
                    result.push([x, y]);
                    break;
                }
                x += dx;
                y += dy;
            }
        }

        return result;
    }

    // Example 1
    const queens1 = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]];
    const king1 = [0, 0];
    console.log(queensAttacktheKing(queens1, king1)); // Output: [[0,1],[1,0],[3,3]]

    // Example 2
    const queens2 = [[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]];
    const king2 = [3, 3];
    console.log(queensAttacktheKing(queens2, king2)); // Output: [[2,2],[3,4],[4,4]]

}