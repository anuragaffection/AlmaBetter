module.exports = { transitionPoint };

function transitionPoint(arr) {
    let tPoint = -1;
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === 1) {
            tPoint = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return tPoint;
}

let arr1 = [0, 0, 0, 1, 1]
console.log(transitionPoint(arr1)); // index = 3

let arr2 = [0, 0, 0, 0]
console.log(transitionPoint(arr2)); // index = -1 

let arr3 = [0, 0, 1, 1, 1, 1];
console.log(transitionPoint(arr3)); // index = 2
