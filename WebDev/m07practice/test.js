function mergeSort(arr) {
  // Base case: If the array has only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them in sorted order
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from the left or right array (if any)
  mergedArr.push(...leftArr.slice(leftIndex));
  mergedArr.push(...rightArr.slice(rightIndex));

  return mergedArr;
}

// Example usage
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]