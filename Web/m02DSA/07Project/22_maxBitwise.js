// Worst Case
function worstmaxBitwise(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let binaryAnd = arr[i] & arr[j];
            if (binaryAnd > max) {
                max = binaryAnd;
            }
        }
    }
    return max;
}


// Best Case
function bestmaxBitwise(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, (arr[i] & arr[j]));
        }
    }
    return max;
}


let arr1 = [2, 3, 4, 5, 6];
console.log(worstmaxBitwise(arr1));  // 4 
console.log(bestmaxBitwise(arr1));   // 4

let arr2 = [10, 12, 6, 8]
console.log(worstmaxBitwise(arr2)); // 8
console.log(bestmaxBitwise(arr2));  // 8

let arr3 = [1, 2, 3, 4];
console.log(worstmaxBitwise(arr3));  // 2
console.log(bestmaxBitwise(arr3));   // 2 

