
{
    // way 01 
    // brute force 

    /**
    * @param {number[][]} grid
    * @return {number}
    */

    var deleteGreatestValue = function (grid) {
        let answer = 0;

        while (grid.length > 0 && grid[0].length > 0) {
            let maxRowValues = [];

            for (let i = 0; i < grid.length; i++) {
                grid[i].sort((a, b) => b - a); // Sort in descending order
                maxRowValues.push(grid[i][0]); // Store the maximum value in this row
                grid[i].shift(); // Remove the maximum value from the row
            }

            const maxDeleted = Math.max(...maxRowValues); // Find the maximum value that was deleted
            answer += maxDeleted;

            // Remove empty rows
            grid = grid.filter(row => row.length > 0);
        }

        return answer;
    };

}











{
    // way 02
    // same approach as previous with better code writing 
    // avoid - looping as much as possible 
    var deleteGreatestValue = function (grid) {
        grid.forEach(row => row.sort((a, b) => a - b))
        let sum = 0

        while (grid[0].length) {
            let column = []
            for (let row of grid) column.push(row.pop())
            sum += Math.max(...column)
        }

        return sum
    };


}









{
    // way 03
    // more optimised than previous one 

    // Sorting each row
    // Go through columns and get max value from current column

    var deleteGreatestValue = function (grid, res = 0) {

        for (let arr of grid) {
            // sorting in descending order
            arr.sort((a, b) => b - a);
        }

        for (let i = 0; i < grid[0].length; i++) {

            let max = -Infinity;

            //get max of each column
            for (let arr of grid) {
                max = Math.max(max, arr[i]);
            }
            res += max;
        }

        return res;
    };
}













{
    // this is wrong code 

    /**
     * @param {number[][]} grid
     * @return {number}
    */

    var deleteGreatestValue = function (grid) {

        let n = grid.length;

        let answer = 0;

        let max = grid[0][0];


        while (n != 0) {

            for (let i = 0; i < grid.length; i++) {

                grid[i].sort((a, b) => a - b);

                let rowMax = grid[i][grid[i].length - 1];

                if (rowMax > max) {
                    max = rowMax;
                }

                grid[i].pop();

            }

            n = grid.length;

            answer += max;

        }

        return answer;

    };
}