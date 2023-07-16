/*
  Heap Sort 
  Bucket Sort

  conting Sort
  Radix Sort 
  

*/








// 01.
// Heap Sort
// visualize heap sort as complete binary tree
// implement heap sort as array
// heap - min & max heap 
// this is in array sorting 


/**
 * Steps in heap sort 
 * 
 * 1. first take an element from an array & place in correct position of heap.
 * 2. if adding will disturb the heap property, so correct it 
 * 3. then go for next element to add in heap.
 * 
 * note - on solving heap sort, we will not making actual heap or 
 *        complete binary tree, but we will only visualize as heap.
 *        We will implement using an array.
 * 
*/


/**
 * we have to create max heap - if we want to sort in ascending order
 * we have to create min heap - if we want to sort in descending order
 * 
 * my step 
 *   --- first make heap sort passing leaf node using loop  
 *   --- in loop call heapify 
 *   --- in heapify - call heapify 
 *   --- now extract top element , then again call heapify 
*/

/**
 *   worst case time complexity   = n ( log n )
 *   average case time complexity = n ( log n )
 *   best case time complexity    = n ( log n ) 
 * 
 *   space complexity = constant 
*/


{

console.log("01. Heap sort ")

let arr = [12, 56, 43, 87, 22, 121];
console.log(heapSort(arr));


function heapSort(arr) {
  let length = arr.length;


  // Build the heap
  // give index in heap as level order 
  // visualize as compelete binary tree with indexing as level order 
  // implement as an array

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    // we are passing only none leaf node 
    heapify(arr, length, i);
  }



  // Extract elements one by one from the heap
  for (let i = length - 1; i > 0; i--) {
    // Swap the root (maximum element) with the last element
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Restore heap property for the remaining heap
    // here, we are excluding the last index 
    // because total length  , we are reducing by one each time
    heapify(arr, i, 0);
  }

  return arr;
}


function heapify(arr, length, rootIndex) {
  let largest = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  // Compare the root with the left child
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // Compare the largest with the right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them and heapify the affected subtree
  if (largest !== rootIndex) {
    let temp = arr[rootIndex];
    arr[rootIndex] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected subtree
    // if there is no subtree, then will autimatically not execute 
    heapify(arr, length, largest);
  }
}
}



{

console.log("01. B. Heap sort practice ");
let myArray = [128, 451, 223, 788, 767, 545, 289];
console.log(myArray);
console.log(myHeapSort(myArray));


// first visualize myarray as heap (compelete binary tree with level order arranging)
function myHeapSort(myArray){
  let n = myArray.length;
  
  // in heap first half element will have some child, 
  // they are called as non leaf node 
  // 
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
    myHeapify(myArray, n, i);
  }

  for (let i = n - 1; i >= 0; i--){
    let temp = myArray[0];
    myArray[0] = myArray[i];
    myArray[i] = temp;

    myHeapify (myArray, i, 0);
  }

  return myArray;

}

function myHeapify(myArray, n, rootIndex){
  let currentIdxOfLargest = rootIndex;
  let leftIndex = 2 * rootIndex + 1;
  let rightIndex = 2 * rootIndex + 2;

  while(leftIndex < n && myArray[leftIndex] > myArray[currentIdxOfLargest]){
    currentIdxOfLargest = leftIndex;
  }

  while (rightIndex < n && myArray[rightIndex] > myArray[currentIdxOfLargest]){
    currentIdxOfLargest = rightIndex;
  }

  if (currentIdxOfLargest !== rootIndex){
    let temp = myArray[rootIndex];
    myArray[rootIndex] = myArray[currentIdxOfLargest];
    myArray[currentIdxOfLargest] = temp;

    myHeapify(myArray, n, currentIdxOfLargest);
    // making heap for their subtree
    // if no subtree , present then automatically exist
  }

}

}










/**
 *  02.  Bucket Sort 
*/









/**
 *   03. Counting Sort 
 * 
 *   --- it is not an inplace sorting algorithm 
 *   --- it is possible for any number.
 *   --- it is a non compartive sorting
 *   --- best to apply when range of number is less;
 *   --- and lots of element is repeating 
 * 
 * 
 * 
 *  myStep 
 *  ---- 
 * 
 * 
 * 
 *   note - Yes, counting sort is possible with negative integers. 
 * 
 *          Counting sort can work for any bounded range of integers - 
 *          they don’t all need to be positive. 
 * 
 *          To make your code work for negative values -
 *          just offset your indexes into the count array - 
 *          by the minimum value in the input.
*/

/**
 * 
 *   worst case tc   = O (n + k)
 *   average case tc = O (n + k)
 *   best case tc    = O (n + k)
 * 
 *  space complexity = O (n + k)
 * 
 */


{
  console.log('03. A. Counting Sort for any type of integers ')
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr){

    if (arr.length === 0){
      return arr;
    }

    // we need new array, where we can store the frequency of each element
    // then size of new array, will depend on range of the array
    // range = max - min

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;

    // this array to store frequency will be of length = range + 1
    // and value inside newArray will be undefined (by default)
    // filling the count array with 0
    let count = new Array(range).fill(0);
    
    
    
    // output to store the sorted value
    let outputArray = new Array(arr.length);


    // storing the frequency of each number in count array 
    for (let i = 0; i < arr.length; i++) {
      count[arr[i] - min]++;
    }


    // modifying the count array with prefix sum
    // sum is calculated on frequency 
    for (let i = 1; i < range; i++) {
      count[i] += count[i - 1];
    }
  
    
    for (let i = arr.length - 1; i >= 0; i--) {
      outputArray[count[arr[i] - min] - 1] = arr[i];
      count[arr[i] - min]--;
    }

    return outputArray;
  }

}



{
  console.log('03. B. Counting Sort for any type of integers ')
  let arr = [1, 9, -3, 3, 4, -5, 2, -9, 4];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr){

    if (arr.length === 0){
      return arr;
      // must or base case
    }

    // we need new array, where we can store the frequency of each element
    // then size of new array, will depend on range of the array
    // range = max - min

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min;

    // this array to store frequency will be of length = range + 1
    // and value inside newArray will be undefined (by default)
    // filling the count array with 0
    let count = new Array(range + 1).fill(0);
    
    
    
    // output to store the sorted value
    let outputArray = new Array(arr.length);


    // storing the frequency of each number in count array 
    for (let i = 0; i < arr.length; i++) {
      count[arr[i] - min]++;
    }


    // modifying the count array with prefix sum
    // sum is calculated on frequency 
    for (let i = 1; i < range + 1; i++) {
      count[i] += count[i - 1];
    }
  
  
    for (let i = arr.length - 1; i >= 0; i--) {
      outputArray[count[arr[i] - min] - 1] = arr[i];
      count[arr[i] - min]--;
    }

    return outputArray;
  }

}



{

  console.log("03. A. Counting sort for positive integers - simplified ")
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr){
    let min = 0;
    let max = Math.max(...arr);

    let output = new Array();
    // here do not need to give length to output array

    let range = max - min;
    let count = new Array(range + 1).fill(0);
    // 0 0 0   0 0 0   0 0 0   - initial value in count array
    // 1 2 3   4 5 6   7 8 9   - index 

    for (let i = 0; i < arr.length; i++){
      count[arr[i]]++;
    }

    // iterating over count array
    for (let i = 0; i < count.length; i++){
      while (count[i] > 0){
        output.push(i);
        count[i]--; 
  
      }
    }
    return output;
  }
}




{

  console.log("03. B. Counting sort for positive integers - simplified ")
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr){
    let min = 0;
    let max = Math.max(...arr);

    let range = max - min;
    let count = new Array(range + 1).fill(0);
    // 0 0 0   0 0 0   0 0 0   - initial value in count array
    // 1 2 3   4 5 6   7 8 9   - index 

    for (let i = 0; i < arr.length; i++){
      count[arr[i]]++;
    }

    // iterating over count array
    let j = 0;
    for (let i = 0; i < count.length; i++){
      while (count[i] > 0){
    
        arr[j] = i;
        j++;
        count[i]--; 
  
      }
    }
    return arr;
  }
}





 
/**
 * 
 *  04. Radix sort
 *  --- Radix Sort is a non-comparative sorting algorithm
 *  --- Radix Sort can be applied to both integer and string representations.
 * 
 * 
 * 
*/










/*
  true or false 


   01. The heap sort algorithm divides the input into a sorted 
       region and an unsorted region. 


   02.  Heap sort uses a binary heap data structure to 
        sort elements. 


   03. The heap sort algorithm has a worst-case time complexity 
       of O(n^2). 


   04. The space complexity of heap sort is O(n).


   05. The initial heap in heap sort is built using
       a top-down approach. 


   06. Heap sort can be implemented using a bottom-up 
       approach to build the heap. 



  Answers
  01. True
  02. True
  03. False
  04. False
  05. False
  06. True

*/


/*

  01. The concatenation of sorted buckets in Bucket Sort 
      results in _____________ 
      (a partially sorted array/
      a fully sorted array/
      an unsorted array).
  


  02. If the bucket size in Bucket Sort is larger, 
      the number of recursive calls __________
      (increases/decreases/remains the same).



  03. The number of buckets needed in Bucket Sort is determined
      by __________
      (The size of the input array /
      The range of values in the input array/
      The desired sorting order).


  04. Radix Sort uses a radix, which represents the number 
      of unique ________ (digits/letters/symbols) in the 
      elements being sorted.


  05. Radix Sort works based on the concept of grouping 
      elements by their ________ (magnitude/binary/place) 
      value and repeatedly sorting them based on each digit 
      or bit position.



  Answers
  01. A fully sorted array
  02. decreases
  03. The range of values in the input array
  04. digits
  05. place

*/