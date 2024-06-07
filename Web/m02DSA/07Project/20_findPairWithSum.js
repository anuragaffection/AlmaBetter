// Traditional Approach
function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}


// Optimized Approach
function findPairWithSum(array, targetSum) {
  const numMap = {};
  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }
  return [];
}



// Provide your comparison here.

/**
 * Traditional approach 
 * --- Time complexity = O(n^2)
 * --- space complexity = O(1)
 * 
 * Optimized approach 
 * --- Time complexity = O (n)
 * --- Space complexity = O (n)
 */

/**
 * In Traditional approach, we are using for loop within for loop,(nested) 
 * for each single element, we are calculating the sum with other remaining element, 
 * this will take time complexity of O (n^2), which is very terrible. 
 * whereas 
 * In opitimized approach, we are justing using single loop, whilte storing thier 
 * difference with target in object, here overall time complexity is O(n)
 * 
 */
