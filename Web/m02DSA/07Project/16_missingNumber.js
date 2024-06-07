// Traditional Approach
var missingNumber = function (arr) {
  let n = arr.length;
  let hashSet = new Set();

  for (let i = 0; i < n; i++) {
    hashSet.add(arr[i]);  // adding to hashSet 
  }

  for (let i = 1; i <= n; i++) {
    if (!hashSet.has(i)) { // finding missing in hashSet 
      return i;
    }
  }

  return 0;  // If no integer is missing, return 0
};



// Optimized Approach
var missingNumber = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) { // sorting 
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) { // finding missing 
      return i + 1;
    }
  }
  return n + 1; // If no integer is missing, return n+1
};



// Provide your comparison here.

/**
 * Traditional solution 
 * --- iterating array will take   = O(n) time 
 * --- adding to hashSet will take = O(n) space 
 * --- hashSet.add()  will take  = O(1) time 
 * --- finding missing will take = O(n) time 
 * --- hashSet.has() takes      = O(1) time 
 * 
 * Overall 
 * --- Time complexity = O (n)
 * --- Space complexity = O (n)
*/


/**
 * Optimized approach 
 * --- iterating to sort will take = O(n) time 
 * --- finding missing will take = O (n) time 
 * 
 * Overall 
 * --- time complexity = O(n)
 * --- space complexity = O(1)
*/


/**
 *  In traditional solution, iterating the arr using for loop,
 *  is taking linear time depending on the length  of arr, 
 *  then we are adding to hashSet, adding to hashSet is happening in constant time, 
 *  After adding we are iterating again to find the missing that is taking linear time,
 *  here overall time complexity is linear.
 *  whereas 
 *  In Optimized solution, We are iterating the arr and Sorting it both at once, 
 *  taking linear time, then we are again iterating to find the missing,
 *  here overall time complexity is linear. 
 * 
 *  
 *  In traditional approach, we are using hashSet to add unique element, 
 *  that is taking  spaces of O(n), 
 *  whereas 
 *  in optimized approach, we are not using any extra spaces, 
 *  that is happenning constant space.
 * 
 * 
 *  Also, Optimized solution is providing better code readability.
 * 
 */