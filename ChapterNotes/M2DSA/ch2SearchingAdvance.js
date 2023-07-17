/**
 *   ternary search
 *   jump search
 *   exponential search
 * 
 *   interpolation search 
 *   tri search
 * 
 *   time complexity comparison
 * 
 *   comparing value with undefined
*/



/**
 *   honing 
 *   akin
*/




{
 /**
 *  01. Ternary Search 
 *  --- Works on sorted array
 *  --- divide & conquer algorithm
 * 
 *  --- worst case tc   = O (log3 n)
 *  --- average case tc = O ( log3 n)
 *  --- best case tc    = O (1)
 * 
 *  --- space complexity = O (1)
 * 
 * 
 */

    console.log("01. Ternary Search");
    let arr = [12, 34, 56, 78, 90];
    console.log(ternarySearch(arr, 90));

    function ternarySearch(arr, target){
        let start = 0;
        let end = arr.length - 1;

        while (start <= end){

            let mid1 = end - Math.floor( (end - start ) / 3); 
            let mid2 = end + Math.floor( (end - start) / 3);

            if (target === arr[mid1]){
                return mid1;
            }

            if (target === arr[mid2]){
                return mid2;
            }

            if (target < arr[mid1]){
                end = mid1 - 1;
            }
            else if (target > arr[mid2]){
                start = mid2 + 1;
            }
            else {
                start = mid1 + 1;
                end = mid2 - 1;
            }
        }
        return -1;
    }
}





{
    /**
     *  02. Jump Search
     * 
     *  worst case time complexity   = O ( root n)
     *  average case time complexity = O ( root n)
     *  best case time complexity    =  O ( 1 )
     * 
     *  space complexity = O (1)
    */

    console.log("02. Jump Search ");
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(arr);
    const target = 10;
    console.log(`${target} is at index = `, jumpSearch(arr, target));

    function jumpSearch (arr, target){
        let n = arr.length;
        let steps = Math.floor(Math.sqrt(n));

        let start = 0;
        let end = steps - 1;

        while (arr[end] < target){
            start = end + 1;
            end = end + steps ;

            if (start >= n){
                return -1;
            }

        }

        while(start <= end){
            if (arr[start] === target){
                return start;
            }
            start++;
        }

        return -1;

    }


}


{
    console.log("02. Jump Search - practice - A")
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var target = 5;
    console.log(arr);
    console.log(`${target} is at index = `, jumpSearch(arr, target));

    function jumpSearch(arr, target) {
        const n = arr.length;

        // step is also an index - 
        // we will be increasing that 
        let step = Math.floor(Math.sqrt(n));

        let prev = 0;
      
        // Finding the block where the target may exist
        while (arr[Math.min(step, n) - 1] < target) {
          prev = step;
          step += Math.floor(Math.sqrt(n));
      
          if (prev >= n) {
            return -1; // Target not found
          }
        }

      
        // Performing a linear search within the block
        while (arr[prev] <= target) {

            // Check if the target is found
            if (arr[prev] === target) {
                return prev; // Index of the target element
            }
            prev++;

            if (prev === Math.min(step, n)) {
              return -1; // Target not found
            }
        }

        return -1; // Target not found
      }
            
}


{
    console.log("02. Jump Search - practice - B")
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var target = 5;
    console.log(arr);
    console.log(`${target} is at index = `, jumpSearch(arr, target));

    function jumpSearch(arr, target) {
        const n = arr.length;

        // step is also an index - 
        // we will be increasing that 
        let step = Math.floor(Math.sqrt(n));

        let prev = 0;
      
        // Finding the block where the target may exist
        while (arr[Math.min(step, n) - 1] < target) {
          prev = step;
          step += Math.floor(Math.sqrt(n));
      
          if (prev >= n) {
            return -1; // Target not found
          }
        }

      
        // Performing a linear search within the block
        while (arr[prev] < target) {
          prev++;

          if (prev === Math.min(step, n)) {
            return -1; // Target not found
          }
        }

        // Check if the target is found
        if (arr[prev] === target) {
            return prev; // Index of the target element
        }

        return -1; // Target not found
      }
            
}


{
    console.log(undefined < 12);
    // false value 
    // if we compare undefied with any value it will gives false
}



{
    /**
     *  03. Exponential search 
     * 
     *  worst time complexity   = O (log n)
     *  average time complexity = O (log n)
     *  best time complexity    = O ( n)
     * 
     *  space complexity = O (1)
     */
    console.log("03. Exponential Search ");
    let arr = [2, 4, 6, 8, 10, 12, 15];
    console.log(arr);
    let target = 12;
    console.log(`${target} is at index = `, exponentialSearch(arr,target));

    function exponentialSearch(arr, target){
        let n = arr.length;
        if (arr[0] === target){
            return 0;
        }

        let i = 1;
        while(i < n && arr[i] < target){
            i *= 3;
        }

        let start = Math.floor(i / 3);
        let end = Math.min(i, n-1);

        while (start <= end){
        
            let mid = Math.floor( (start + end) / 2 );

            if (target === arr[mid]){
                return mid;
            }

            if (target > arr[mid]){
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        retur -1;
    }
}

{
    console.log("03. Exponential Search - B ");
    let arr = [2, 4, 6, 8, 10, 12, 15];
    console.log(arr);
    let target = 12;
    console.log(`${target} is at index = `, exponentialSearch(arr,target));

    function exponentialSearch(arr, target){
        let n = arr.length;
        if (arr[0] === target){
            return 0;
        }

        let i = 1;
        while(i < n && arr[i] < target){
            i *= 2;
        }

        let start = Math.floor(i / 2);
        let end = Math.min(i, n-1);

        while (start <= end){
        
            let mid = Math.floor( (start + end) / 2 );

            if (target === arr[mid]){
                return mid;
            }

            if (target > arr[mid]){
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        retur -1;
    }
}




/*

  agree or diagree


  01. Ternary search is more efficient than binary search.

  02. Ternary search's space complexity of O(n) makes it a 
      memory-efficient algorithm for searching in large arrays.

  03. Ternary search can be modified to handle non-sorted arrays 
      by applying a sorting algorithm before performing the search. 

  04. Ternary search is not suitable for dynamically changing arrays 
      where elements are frequently inserted or removed, 
      as it requires a sorted array for efficient searching. 

  05. Ternary search requires a sorted array as input, which limits 
      its applicability compared to other search algorithms. 



  Answers

  01. Disagree 
       it depends , generally ternary search is more efficient than
       binary search for large data set.
       But for small data set may be binary search be more efficient than
       ternary search.

  02. Disagree

  03. Agree

  04. Agree

  05. Agree

*/




/*

   01. The Jump Search algorithm performs a __________(linear/binary/
   sequential) search within the identified block to find the exact
   position of the target value.

   
   02. The block size in Jump Search is calculated as the __________
   (square root/logarithmic/reciprocal) of the length of the array.

   
   03. The Jump Search algorithm returns the index of the target element 
   if it is found, or __________(-1 / 0 / null) if the target value 
   is not present in the array.
   
   04. Jump Search is an __________(in-place/recursive/efficient) 
   algorithm that operates directly on the input array without
   requiring additional data structures.
   
   05. The average-case time complexity of Jump Search is __________
   ( O(1)/O(log n)/O(√n) ), resulting in improved efficiency 
   compared to linear search.


   Answers

   01. equential

   02. square root

   03. -1

   04. in-place

   05. O(√n) 


*/


/*
  true or false - tri search

  01. Tri-Search is an extension of the Ternary Search algorithm that
      introduces variable partitioning to improve search efficiency.

  02. Tri-Search adaptively divides the search space into equal parts 
      based on the characteristics of the data.

  03. Tri-Search performs a binary search between the mid1 and mid2
      positions if the target value falls between those elements.

  04. The Tri-Search algorithm requires the input array to be sorted 
      in ascending order.

  05. Tri-Search guarantees to find the target value in a sorted 
      array in logarithmic time complexity.

  Answers
  True
  False
  True
  True
  False

*/

