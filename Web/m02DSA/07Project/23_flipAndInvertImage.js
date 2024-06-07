// Worst Case
function worstflipAndInvertImage(image) {
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < Math.floor(image[i].length / 2); j++) {
            let temp = image[i][j];
            image[i][j] = image[i][image[i].length - j - 1];
            image[i][image[i].length - j - 1] = temp;
        }
    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1;
            }
            else {
                image[i][j] = 0;
            }
        }
    }
    return image;
}



// Best Case
function bestflipAndInvertImage(image) {
    return image.map(row => row.reverse().map(bit => bit ^ 1));
}



let image1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
let image1Copy = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
console.log(worstflipAndInvertImage(image1));
console.log(bestflipAndInvertImage(image1Copy));
//  [[1,0,0],[0,1,0],[1,1,1]]

let image2 = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
let image2Copy = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
console.log(worstflipAndInvertImage(image2));
console.log(bestflipAndInvertImage(image2Copy));
//  [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]



/**
 * -- 0 ^ number = number 
 * -- number ^ number = 0 
 * 
 * -- 0 ^ 1 = 1 
 * -- 1 ^ 1 = 0
 * 
 * -- In worst case, i am doing in modification of image array, 
 * -- so that's why it will change the state of image array 
 * 
 * -- In best case, returning new image using map 
 */

