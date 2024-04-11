






{
    /**
     * @param {number[][]} mat
     * @return {number[]}
   */


    var rowAndMaximumOnes = function (mat) {

        let index = 0;
        let maxCount = 0;

        for (let i = mat.length - 1; i >= 0; i--) {

            let count = 0;

            for (let j = 0; j < mat[i].length; j++) {

                if (mat[i][j] == 1) {
                    count++;
                }
            }

            if (maxCount <= count) {
                maxCount = count;
                index = i;
            }
        }

        return [index, maxCount];

    };
}