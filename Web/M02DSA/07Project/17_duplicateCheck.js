// Traditional Approach
class Solution {
    duplicateCheck(str) {
        let temp = '' + str[0];
        for (let i = 0; i < str.length; i++) {
            if (temp.indexOf(str[i]) == -1) {
                temp = temp + str[i];
            }
        }
        return temp;
    }
}


// Optimized Approach
class Solution {
    duplicateCheck(str) {
        const p = new Set(str);
        const t = [...p];
        return t.join("");
    }
}

// Provide your comparison here.

/**
 * Traditional Solution 
 * -- temp variable =  can take O(n) space 
 * -- iterrating str & indexOf within loop =  will take O(n^2) time 
 * 
 * Overall 
 * -- Time complexity  = O(n^2)
 * -- Space complexity = O(n)
*/


/**
 * Optimized Solution 
 * -- storing in set  = can take O(n) space 
 * -- spread operator  = can take O(n) time 
 * -- storing in array = can take O(n) space 
 * -- t.join() = can take O(n) time 
 * 
 * Overall 
 * -- Time complexity = O(n)
 * -- space complexity = O(n)
 */


/**
 *  In traditional approach, we are iterating the str using for loop, 
 *  and then within we are using indexOf to check whether it is already included or not,
 *  indexOf itself taking linear time, so overall time complexity become O(n^2).
 *  whereas 
 *  In optimized solution, we are using spread operator that is taking O(n);
 * 
 *  In traditional approach, the length of temp variable depend upon the size of 
 *  unique element present in str, so that why it is taking O(n) space , 
 *  Whereas 
 *  In optimized solution, the set and array is taking O(n) space. 
 * 
 *  Also, Optimized solution is providing better code readability
 *  due to use new javascript syntax like  spread operator. 
 */

