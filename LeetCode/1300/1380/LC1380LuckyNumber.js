





{
    // way 01 
    // Brute force 

    /**
     * @param {number[][]} matrix
     * @return {number[]}
    */
    var luckyNumbers = function (matrix) {

        let lucky = [];

        let min = [];
        let max = [];


        // finding all min  - in row 
        for (let i = 0; i < matrix.length; i++) {

            min.push(Math.min(...matrix[i]));
        }




        // finding all max - in columns
        let temCol = 0;
        while (temCol < matrix[0].length) {

            let maxEle = 0;
            for (let i = 0; i < matrix.length; i++) {

                if (maxEle < matrix[i][temCol]) {
                    maxEle = matrix[i][temCol];
                }
            }
            max.push(maxEle);
            temCol++;
        }




        // finding common 
        for (let i = 0; i < max.length; i++) {
            if (min.includes(max[i])) {
                lucky.push(max[i])
            }
        }


        // returning
        return lucky;

    };
}