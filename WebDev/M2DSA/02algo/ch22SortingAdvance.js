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
  function myHeapSort(myArray) {
    let n = myArray.length;

    // in heap first half element will have some child, 
    // they are called as non leaf node 
    // 
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      myHeapify(myArray, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
      let temp = myArray[0];
      myArray[0] = myArray[i];
      myArray[i] = temp;

      myHeapify(myArray, i, 0);
    }

    return myArray;

  }

  function myHeapify(myArray, n, rootIndex) {
    let currentIdxOfLargest = rootIndex;
    let leftIndex = 2 * rootIndex + 1;
    let rightIndex = 2 * rootIndex + 2;

    while (leftIndex < n && myArray[leftIndex] > myArray[currentIdxOfLargest]) {
      currentIdxOfLargest = leftIndex;
    }

    while (rightIndex < n && myArray[rightIndex] > myArray[currentIdxOfLargest]) {
      currentIdxOfLargest = rightIndex;
    }

    if (currentIdxOfLargest !== rootIndex) {
      let temp = myArray[rootIndex];
      myArray[rootIndex] = myArray[currentIdxOfLargest];
      myArray[currentIdxOfLargest] = temp;

      myHeapify(myArray, n, currentIdxOfLargest);
      // making heap for their subtree
      // if no subtree , present then automatically exist
    }

  }

}








{
  /**
   *   02. Bucket sort 
  */

  console.log("02. Bucket sort ");
  let arr = [15, 48, -79, 6, 23, 8];
  console.log(arr);
  console.log(bucketSort(arr));

  function bucketSort(arr, bucketSize = 5){

    if (arr.length === 0){
      return arr;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    let totalBucketCount = Math.floor( (max - min) / bucketSize) + 1;

    // creating empty array to store each individual buckets
    // now make empty array of 2-d array
    let allBuckets = new Array (totalBucketCount);

    // [  [], [], [], [],  ] - total will depend on bucketCount
    for (let i = 0; i < allBuckets.length; i++){
      allBuckets[i] = [];
    }

    // now find the ranging of each buckets & storin the -
    // value according range 
    for (let i = 0; i< arr.length; i++){
      const bucektIndex = Math.floor( (arr[i] - min) / bucketSize);
      allBuckets[bucektIndex].push(arr[i]);

      // allBuckets.push() = one dimensional
      // allBuckets[index].push()  = two dimensional
    }


    // sorting each buckets from all Buckets
    let sortedArray = [];
    for (let i = 0; i < allBuckets.length; i++){
      insertionSort(allBuckets[i]);
      sortedArray.push(...allBuckets[i]);
    }

    return sortedArray;

  }


  function insertionSort(arr){

    for (let i = 1; i < arr.length; i++){
      let key = arr[i];

      let j = i - 1;
      while( j >= 0 && key < arr[j]){
        arr[j+1] = arr[j];
        j--;
      }
      arr[j + 1 ]=key;
    }
  }

  

}











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
 *   space complexity = O (n + k)
 * 
*/


{
  console.log('03. A. Counting Sort for any type of integers ')
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr) {

    if (arr.length === 0) {
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

  function countingSort(arr) {

    if (arr.length === 0) {
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

  console.log("03. C. Counting sort for positive integers - simplified ")
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr) {
    let min = 0;
    let max = Math.max(...arr);

    let output = new Array();
    // here do not need to give length to output array

    let range = max - min;
    let count = new Array(range + 1).fill(0);
    // 0 0 0   0 0 0   0 0 0   - initial value in count array
    // 1 2 3   4 5 6   7 8 9   - index 

    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }

    // iterating over count array
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        output.push(i);
        count[i]--;

      }
    }
    return output;
  }
}




{

  console.log("03. D. Counting sort for positive integers - simplified - in array ")
  let arr = [4, 2, 2, 8, 3, 3, 1];
  console.log(arr);
  console.log(countingSort(arr));

  function countingSort(arr) {
    let min = 0;
    let max = Math.max(...arr);

    let range = max - min;
    let count = new Array(range + 1).fill(0);
    // 0 0 0   0 0 0   0 0 0   - initial value in count array
    // 1 2 3   4 5 6   7 8 9   - index 

    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }

    // iterating over count array
    let j = 0;
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        arr[j] = i;
        j++;
        count[i]--;

      }
    }
    return arr;
  }
}










{
  /**
   *  04. Radix sort
   *  Radix Sort is a non-comparative sorting algorithm
   *  Radix Sort can be applied to both integer and string representations.
   * 
   * 
   *  Time complexity: O(d * (n + k))
   *                 : d = total digit like here 10 (in decimal) or 2 (in binary)
   *                 : n = input size in an array
   *                 : k = range for digit usually 10 in decimal or 2 in binary .
  */

  console.log('04. Radix sort  for postive integers only');
  let arr = [123, 32, 4567, 87, 1, 111];
  console.log(arr);
  console.log(radixSort(arr));

  function radixSort(arr) {

    let max = Math.max(...arr);
    let divisor = 1;

    while (divisor < max) {
      arr = countingSort(arr, divisor);
      divisor *= 10;
    }

    return arr;
  }

  function countingSort(arr, divisor) {
    let n = arr.length;

    // no need find the range 
    // we already know the range will be 10. from 0 to 9
    let count = new Array(10).fill(0);

    let output = new Array(n);

    for (let i = 0; i < arr.length; i++) {
      let digit = Math.floor((arr[i] / divisor) % 10);
      count[digit]++;
    }

    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      let digit = Math.floor((arr[i] / divisor) % 10);
      // storing arr[i] in output , according to each digit sort 
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    // copying value form output to array
    for (let i = 0; i < output.length; i++) {
      arr[i] = output[i];
    }

    return arr;

  }
}



{
  console.log("04. Radix sort for negative & postive integers");
  const arr = [9, -5, 2, -8, 0, -3, 7, -1];
  console.log(arr)
  const sortedArr = radixSort(arr);
  console.log(sortedArr); // Output: [-8, -5, -3, -1, 0, 2, 7, 9]

  // Function to perform Radix Sort
  function radixSort(arr) {

    // Find the maximum absolute value
    const max = Math.max(...arr.map(Math.abs)); 

    // Apply counting sort for each digit from least significant to most significant
    let divisor = 1;
    while (Math.floor(max / divisor) > 0) {
      countingSort(arr, divisor);
      divisor *= 10;
    }

    return arr;
  }


  // Function to perform counting sort based on a specific digit
  function countingSort(arr, divisor) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(19).fill(0); // Count array for digits -9 to 9

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / divisor) % 10 + 9; // Adjust range of digits to 0-18
      count[digit]++;
    }

    // Calculate cumulative counts
    for (let i = 1; i < 19; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array in sorted order
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / divisor) % 10 + 9; // Adjust range of digits to 0-18
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    // Copy the sorted elements back to the original array
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  }



}










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

/*


01. Which of the following sorting algorithms can be used as a subroutine in Counting Sort?

 Merge Sort
 Quick Sort
 Radix Sort
 Bubble Sort



02. Counting Sort is a stable sorting algorithm because:

 It uses a stable partitioning technique
 It uses a stable selection sort
 It ensures equal elements have the same relative order
 It ensures equal elements have the same absolute order






03.What is the main advantage of Counting Sort over other comparison-based sorting algorithms?

Counting Sort has a worst-case time complexity of O(n^2).

Counting Sort is an in-place sorting algorithm.

Counting Sort is stable.

Counting Sort does not require comparison between elements.







04. Which operation is used to insert a new element into a heap?

Heapify

Extract-Max

Decrease-Key

Insert






05. Counting Sort can be used for sorting:

Only positive integers

Only negative integers

Only integers

Integers and other data types






06. Which radix is commonly used for integers in Radix Sort?

Base 2 (binary)

Base 8 (octal)

Base 10 (decimal)

Base 16 (hexadecimal)





07. Which of the following data structures is commonly used to implement a heap?

Linked List

Array

Stack

Queue






08. What is the time complexity of building a heap from an unsorted array of size n using heapify operation?

O(n)

O(log n)

O(n log n)

O(n^2)





09. What happens when the number of elements to be sorted exceeds the number of available buckets in bucket sort?

The algorithm fails to sort the elements.

The algorithm creates additional buckets dynamically.

The algorithm uses a different sorting algorithm.

The algorithm skips some elements.






10. Bucket sort is a stable sorting algorithm.

True

False






01
Radix Sort

Justification

Radix Sort can be used as a subroutine in Counting Sort because it sorts elements based on their digits, from the least significant digit to the most significant digit. This property makes it suitable for sorting elements in Counting Sort, which relies on counting the occurrences of each element.




02.
It ensures equal elements have the same relative order

Justification

Counting Sort is considered a stable sorting algorithm because it ensures that elements with equal keys appear in the same order in the sorted output as they do in the input.





03.
Counting Sort does not require

comparison between elements.

Justification

Counting Sort works by counting the number of occurrences of each element and then using this information to determine the correct position of each element in the sorted output. It does not rely on comparing elements directly.




4.
Insert

Justification

The "Insert" operation is used to insert a new element into a heap. After insertion, the heap property is restored by performing the heapify operation if necessary.




5.
Only positive integers

Justification

Counting Sort is commonly used for sorting arrays of positive integers. It is not directly applicable to other data types without some modifications.






6.
Base 10 (decimal)

Justification

Radix Sort for integers commonly uses base 10 (decimal) as the radix, representing the number of unique digits.




7.
Array

Justification

Arrays are commonly used to implement a heap due to their contiguous memory allocation, which allows for efficient indexing and access to elements.





8.
O(n)

Justification

Building a heap from an unsorted array using heapify operation takes linear time, which is O(n).




9.
The algorithm creates additional buckets dynamically.

Justification

In bucket sort, if the number of elements to be sorted exceeds the number of available buckets, the algorithm can dynamically create additional buckets to accommodate the extra elements. This ensures all elements are sorted correctly.





10.
True

Justification

Bucket sort is a stable sorting algorithm, which means that elements with equal values retain their relative order after sorting. The individual buckets are sorted individually, preserving the order of elements within each bucket.


*/