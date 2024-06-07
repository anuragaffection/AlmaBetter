// Traditional Approach
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) result.push(temp);
  return result;
}


// Optimized Approach
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}



// Provide your comparison here.

/**
 * Traditional approach  
 * --- iterating arr = will take = O(n) time 
 * --- storing output = will take = O(n) space 
 * --- temp variable = is taking additional space 
 * --- push() = O(1) time 
 * 
 * Oveall 
 * -- space complexity = O(n)
 * -- time complexity = O(n)
*/


/**
 * Optimized approach 
 * --- while loop = O(n) time 
 * --- storig output = O(n) space 
 * --- slice = O(1) time 
*/


/**
 * Both the traditional approach & optimized approach are 
 * taking O(n) time complexity and O(n) space complexity . 
 * 
 * Still optimized approach is better because in traditional approach 
 * we are using temp variable, that is taking additional or auxiliary space, 
 * whereas in optimized apporach we are direction pushing the returned array ater 
 * uinsg slice to output arry. 
 * 
 * Optimized solution is provding better code readability with the use inbuilt 
 * method like slice();
 */



