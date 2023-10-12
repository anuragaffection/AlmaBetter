





{

    // way 01 
    // brute force way 

    // sc = linear 
    // tc = quadratic 

    // sc = 49.9 mb 
    // tc = 125 ms 



    /**
    * @param {number[][]} matrix
    * @return {boolean}
    */
    var checkValid = function (matrix) {

        let n = matrix.length;

        let set = new Set();


        for (let i = 0; i < n; i++) {

            for (let k = 1; k <= n; k++) {
                set.add(k);
            }


            for (let j = 0; j < n; j++) {

                if (!set.has(matrix[i][j])) {
                    return false;
                }

                if (set.has(matrix[i][j])) {

                    set.delete(matrix[i][j]);
                }
            }
        }


        for (let i = 0; i < n; i++) {

            for (let k = 1; k <= n; k++) {
                set.add(k);
            }


            for (let j = 0; j < n; j++) {

                if (!set.has(matrix[j][i])) {
                    return false;
                }

                if (set.has(matrix[j][i])) {

                    set.delete(matrix[j][i]);
                }
            }
        }


        return true;

    };



}











{
    // way 02 
    // same as previous , just other way of writing the code 

    // sc = linear 
    // tc = quadratic 

    // sc = 49.8 mb 
    // tc = 114 ms 


   /**
   * @param {number[][]} matrix
   * @return {boolean}
   */
    var checkValid = function (matrix) {

        let n = matrix.length;

        let set = new Set();
        let set2 = new Set();


        for (let i = 0; i < n; i++) {

            for (let k = 1; k <= n; k++) {
                set.add(k);
                set2.add(k);
            }


            for (let j = 0; j < n; j++) {

                if (!set.has(matrix[i][j])) {
                    return false;
                }
                else {
                    set.delete(matrix[i][j]);
                }

                if (!set2.has(matrix[j][i])) {
                    return false;
                }
                else {
                    set2.delete(matrix[j][i]);

                }

            }
        }


        return true;

    };
}