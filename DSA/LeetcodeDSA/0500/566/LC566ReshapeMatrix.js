




{
    // way 01 
    // brute force 


    /**
     * @param {number[][]} mat
     * @param {number} r
     * @param {number} c
     * @return {number[][]}
    */



    var matrixReshape = function (mat, r, c) {

        let m = mat.length;
        let n = mat[0].length;

        let newMat = new Array(r).fill(0).map(() => new Array(c).fill(0));


        if (m * n !== r * c) {
            return mat;
        }

        // converting in one d array 
        let arr = mat.flat();


        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {

                newMat[i][j] = arr.shift();
            }
        }

        return newMat;
    };



}











{
    // way 02 
    // brute force 
    // but better time complexity form previous one 


    // note = pop() takes less time compared to unshift ()

    /**
     * @param {number[][]} mat
     * @param {number} r
     * @param {number} c
     * @return {number[][]}
    */

    var matrixReshape = function (mat, r, c) {

        let m = mat.length;
        let n = mat[0].length;

        let newMat = new Array(r).fill(0).map(() => new Array(c).fill(0));


        if (m * n !== r * c) {
            return mat;
        }

        let arr = mat.flat();


        for (let i = r - 1; i >= 0; i--) {

            for (let j = c - 1; j >= 0; j--) {

                newMat[i][j] = arr.pop();
            }
        }

        return newMat;
    };


}







{
    // way 03 
    // better time complexity & space complexity 

    /**
     * @param {number[][]} mat
     * @param {number} r
     * @param {number} c
     * @return {number[][]}
    */


    var matrixReshape = function (mat, r, c) {

        let m = mat.length;
        let n = mat[0].length;

        if (m * n !== r * c) {
            return mat;
        }

        let arr = mat.flat();
        let newMat = [];

        while (arr.length) {
            newMat.push(arr.splice(0, c))
        }

        return newMat;
    };


}












