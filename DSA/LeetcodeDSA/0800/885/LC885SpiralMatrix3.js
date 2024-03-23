


{
    function spiralMatrix(rows, cols, rStart, cStart) {

        const result = [];
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        let row = rStart;
        let col = cStart;
        let direction = 'right';


        const move = {
            'right': [0, 1],
            'down': [1, 0],
            'left': [0, -1],
            'up': [-1, 0]
        };




        for (let i = 0; i < rows * cols; i++) {

            result.push([row, col]);
            visited[row][col] = true;

            const newRow = row + move[direction][0];
            const newCol = col + move[direction][1];

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !visited[newRow][newCol]) {
                row = newRow;
                col = newCol;
            } 
            else {
                // Change direction
                direction = {
                    'right': 'down',
                    'down': 'left',
                    'left': 'up',
                    'up': 'right'
                }[direction];
                row += move[direction][0];
                col += move[direction][1];
            }
        }

        return result;
    }



}