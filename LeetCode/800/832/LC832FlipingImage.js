




// way 01
{
    /**
    * @param {number[][]} image
    * @return {number[][]}
    */


    var flipAndInvertImage = function (image) {

        let n = image.length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < Math.floor(n / 2); j++) {
                let temp = image[i][j];
                image[i][j] = image[i][n - 1 - j];
                image[i][n - 1 - j] = temp;

            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (image[i][j] === 0) {
                    image[i][j] = 1;
                }
                else {
                    image[i][j] = 0;
                }
            }
        }

        return image;


    };
}










// way 02

{
    /**
     * @param {number[][]} image
     * @return {number[][]}
    */


    var flipAndInvertImage = function (image) {

        for (let rowIndex in image) {

            image[rowIndex] = image[rowIndex].reverse();

            image[rowIndex] = image[rowIndex].map(x => 1 - x);
        }

        return image;

    };
}








// way 03
{
    // by using xor

    // linear time complexity 
}