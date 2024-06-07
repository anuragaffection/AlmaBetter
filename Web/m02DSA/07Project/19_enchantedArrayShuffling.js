// Traditional Approach
function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    } else {
      shuffledArray.push(sortedArray[left]);
      shuffledArray.push(sortedArray[right]);
    }
    left++;
    right--;
  }
  return shuffledArray;
}


// Optimized Approach
function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    shuffledArray.push(sortedArray[left++]);
    shuffledArray.push(sortedArray[right--]);
  }

  if (left === right) {
    shuffledArray.push(sortedArray[left]);
  }
  return shuffledArray;
}



// Provide your comparison here.

/**
 * Traditional approach  
 * --- sorting array  will take   = O(n log n) time 
 * --- shuffledArray  will take   = O(n) space 
 * --- pushing in result can take = O(n) time 
 * --- push() method will take  =  O(1) time 
 * 
 * Overall 
 * --- time complexity = O (n log n)
 * --- space complexity = O(n)
 * 
*/


/**
 * Optimized approach 
 * --- sorting array will take  = O(n log n) time 
 * --- shuffledArray  will take = O (n) space 
 * --- pushing in result can take = O(n) time 
 * --- push() method will take = O(1) time 
 * 
 * Overall 
 * --- time complexity = O(n log n)
 * --- space complexity = O(n)
 * 
*/


/**
 * Both the traditional approach & optimized approach are 
 * taking O(n log n) time complexity and O(n) space complexity . 
 * 
 * We are using exact same approach in both traditional and optimized, 
 * still optimized approach is better one, in optimized approach, 
 * we are directly incrementing left and right variable at the time of 
 * pushig in result or shuffled array.
 * 
 * Also the comparison (if (right === left )) within each iterations,(while loop) 
 * in traditional method increase the time overall time taken to excute the code. 
 * 
 */

