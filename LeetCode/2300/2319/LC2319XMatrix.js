

{
    // way 01
    // brute force 


    /**
     * @param {number[][]} grid
     * @return {boolean}
    */


    var checkXMatrix = function (grid) {

        let n = grid.length;

        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n; j++) {

                if (i === j) {

                    if (grid[i][j] === 0) {
                        return false;
                    }

                }
                else if (i === n - j - 1) {

                    if (grid[i][j] === 0) {
                        return false;
                    }
                }
                else {
                    if (grid[i][j] !== 0) {
                        return false;
                    }

                }
            }
        }

        return true;

    };
}













{
    // way 02
    // this solution is not optimised
    // this was my initial thought  


    /**
     * @param {number[][]} grid
     * @return {boolean}
    */


    var checkXMatrix = function (grid) {

        let n = grid.length;

        for (let i = 0; i < n; i++) {

            if (grid[i][i] === 0) {
                return false;
            }

            if (grid[i][n - i - 1] === 0) {
                return false;
            }


            for (let j = 0; j < n; j++) {

                if (i === j) {
                    // doing nothing

                }
                else if (i === n - j - 1) {
                    // doing nothng 
                }
                else {
                    if (grid[i][j] !== 0) {
                        return false;
                    }

                }
            }
        }

        return true;

    };
}











{
    /**
    * @param {number[][]} grid
    * @return {boolean}
    */


    var checkXMatrix = function (grid) {

        let n = grid.length;

        for (let i = 0; i < n; i++) {

            if (grid[i][i] === 0 || grid[i][n - i - 1] === 0) {
                return false;
            }

            for (let j = 0; j < n; j++) {

                if (i !== j && i !== n - j - 1 && grid[i][j] !== 0) {
                    return false;

                }

            }
        }

        return true;

    };
}