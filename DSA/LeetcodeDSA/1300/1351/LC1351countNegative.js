/*
   1351. Count Negative Numbers in a Sorted Matrix

   Given a m x n matrix grid which is sorted in non-increasing order 
   both row-wise and column-wise, 
   return the number of negative numbers in grid.

*/








{
    /* 
      way 01 - Brute force 

      tc = O (n * m) = O (n^2)
      sc = constant 

    */

    /**
     * @param {number[][]} grid
     * @return {number}
    */

    var countNegatives = function (grid) {

        let count = 0;

        for (let i = 0; i < grid.length; i++) {

            for (let j = 0; j < grid[0].length; j++) {

                if (grid[i][j] < 0) {
                    count++;
                }
            }
        }

        return count;

    };

}




{
    /* 
      way 02 - Brute force - making more correct 

      tc = O (n * m) = O (n^2)
      sc = constant 
      
    */

    /**
     * @param {number[][]} grid
     * @return {number}
    */

    var countNegatives = function (grid) {

        let count = 0;

        for (let i = 0; i < grid.length; i++) {

            for (let j = 0; j < grid[i].length; j++) {

                if (grid[i][j] < 0) {
                    count++;
                }
            }
        }

        return count;

    };

}




{
    // way 03 - usig flat & filter

    // Time Complexity: O(m*n)
    // Space Complexity: O(n)

    // flat is used to convert nested array in single array
    var countNegatives = function (grid) {
        return grid.flat().filter(ele => ele < 0).length;
    };
}




{
    // way 04 - reduce & filter 

    /**
    * @param {number[][]} grid
    * @return {number}
    */

    const countNegatives = grid =>
        grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);
}




{
    // way 05 - applying binary search 
    
    /**
     * @param {number[][]} grid
     * @return {number}
    */

    var countNegatives = function (grid) {
        let count = 0;
        for (const row of grid) {
            const index = searchFirstNegativeIndex(row)
            count += row.length - index;
        }
        return count
    };

    function searchFirstNegativeIndex(arr, target) {
        let r = arr.length - 1;
        let l = 0;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)
            if (arr[mid] < 0) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return l
    }
}