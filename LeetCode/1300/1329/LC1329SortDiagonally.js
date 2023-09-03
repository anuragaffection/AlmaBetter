
// hint 
// every diagonal has same i - j


// store it in map
// then sort in map
// then reassign 




{
    /**
     * @param {number[][]} mat
     * @return {number[][]}
    */

    var diagonalSort = function (mat) {

        let dia = new Map();

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {

                if (dia.has(i - j)) {
                    dia.get(i - j).push(mat[i][j]);

                }
                else {
                    // setting new Array at each difference
                    dia.set((i - j), new Array());
                    dia.get((i - j)).push(mat[i][j]);
                }
            }
        }

        dia.forEach((e) => e.sort((a, b) => a - b));

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                mat[i][j] = dia.get(i - j).shift();
            }
        }

        return mat;

    };
}