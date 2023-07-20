/*
   
  Recursion advance - Advance Recursin coding & analysis

  01. Find the First Occurrence of an Element in an Array 

  02. Check if Two Strings are Anagrams 

  03. Remove Duplicates from an Array

  04. Reverse a String 

  05. Power Function 

  06. The sum of Array Elements

  07. Factorial 

  08. Fibonacci Sequence 

  09. Given an array of integers sorted in non-decreasing order, return an array of the squares of each number in non-decreasing order. 

  10. Given an unsorted array of integers and an integer k, find the kth largest element in the array. 

  11. Given two integer arrays nums1 and nums2, return an array of their intersection. The intersection is the set of elements that appear in both arrays, in any order. 

  12. Given an array of intervals where intervals[i] = [starti, endi], merge overlapping intervals and return the merged intervals in sorted order. 

*/

{

    {
        // Time Complexity: O(n)
        // Space Complexity: O(1)

        console.log("01. first occurrence - simple ");

        const arr = [2, 4, 6, 6, 6, 8, 10];
        const target = 6;

        function findFirstOccurrence1S(arr, target) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === target) {
                    return i;
                }
            }
            return -1;
        }

        console.log(findFirstOccurrence1S(arr, target));
        // index = 2


    }



    {
        /*
         time complexity = O (n)
    
         The time complexity of the findFirstOccurrence function in your code is O(n), where n is the length of the array. This is because in the worst case scenario, the function will iterate through all the elements of the array until it finds the first occurrence of the target element.
    
        */


        /*
         space complexity = O (n)
    
         The space complexity of the function is O(n) as well. This is because for each recursive call, a new frame is added to the call stack, which requires additional memory. In the worst case scenario, where the target element is not found until the last element of the array, the maximum depth of the call stack will be equal to the length of the array.
    
        */

        console.log('01. First occurrence - Recursion');

        const arr = [2, 4, 6, 6, 6, 8, 10];
        const target = 6;

        function findFirstOccurrence1R(arr, target, index = 0) {
            if (index >= arr.length) {
                return -1;
            }
            if (arr[index] === target) {
                return index;
            }
            return findFirstOccurrence1R(arr, target, index + 1);
        }

        console.log(findFirstOccurrence1R(arr, target));

    }


    {
        // time complexity = O (log n)
        // space complexity = O (1)

        console.log("01. find first occurrence - optimised - no direct return ");
        const arr = [2, 4, 6, 6, 6, 8, 10];
        const target = 6;

        function findFirstOccurrence1O(arr, target) {
            let first = -1;

            let start = 0;
            let end = arr.length - 1;

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);

                if (arr[mid] === target) {
                    first = mid;
                    // we are not direct returning the mid
                }

                if (arr[mid] >= target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            return first;
        }
        console.log(findFirstOccurrence1O(arr, target));
    }



    {
        console.log("01. find first occurrence - optimised - direct return ")
        const arr = [2, 4, 6, 6, 6, 8, 10];
        const target = 6;

        function findFirstOccurrence1OR(arr, target) {
            let start = 0;
            let end = arr.length - 1;

            while (start <= end) {
                const mid = Math.floor((start + end) / 2);

                if (arr[mid] === target && (mid === 0 || arr[mid - 1] !== target)) {
                    return mid;
                }
                else if (arr[mid] < target) {
                    start = mid + 1;
                }
                else {
                    // do dry , you will get more concept 
                    end = mid - 1;
                }
            }

            return -1;
        }

        console.log(findFirstOccurrence1OR(arr, target));  // Output: 2
    }




    {
        // time complexity = O (log n)
        // space complexity = O ( 1)
        console.log("01. First and last occurrence of target - optimised ");
        const arr = [2, 4, 6, 6, 6, 8, 10];
        const target = 6;

        function firstAndLastOccurrence(arr, target) {
            // not found condition
            let first = -1;
            let last = -1;

            {
                let start = 0;
                let end = arr.length - 1;

                while (start <= end) {
                    let mid = Math.floor((start + end) / 2);

                    if (arr[mid] === target) {
                        first = mid;
                    }

                    if (arr[mid] >= target) {
                        end = mid - 1;
                    }
                    else {
                        start = mid + 1;
                    }
                }
            }

            {
                let start = 0;
                let end = arr.length - 1;

                while (start <= end) {
                    let mid = Math.floor((start + end) / 2);

                    if (arr[mid] === target) {
                        last = mid;
                    }

                    if (arr[mid] <= target) {
                        start = mid + 1;
                    }
                    else {
                        end = mid - 1;
                    }
                }
            }

            return [first, last];
        }
        console.log(firstAndLastOccurrence(arr, target));
    }

}




{
    {
        /* 
           time complexity = O ( n log n )
           
           .split() - has O (n)
           .join()  - has O (n)
           .sort()  - has O (n log n)

           total = n + n + n log n 
                 = 2n + n log n
                 = n + n log n   = after removing costant
                 = n log n       = after removing lower order
           
        */

        // space complexity = O (n )
        console.log("02. Check if two string are anagram ");
        const str1 = "listen";
        const str2 = "silent";

        function areAnagrams02(str1, str2) {

            if (str1.length !== str2.length) {
                return false;
            }

            let sorted1 = str1.split("").sort().join("");
            let sorted2 = str2.split("").sort().join("");


            if (sorted1 === sorted2) {
                return true;
            }

            return false;
        }

        console.log(areAnagrams02(str1, str2));
    }



    {
        /* 
           time complexity  = O (n)
            - a loop to traverse has - linear time 
            - map.set() - has constant time 


           space complexity = O (n )
            - creating a new map of length n

        */
        console.log("02. check if two strings are anagram - optimised");

        const str1 = "listen";
        const str2 = "silent";

        function areAnagrams02O(str1, str2) {

            let check = false;

            if (str1.length !== str2.length) {
                return false;
            }

            let map = new Map();

            for (let i = 0; i < str1.length; i++) {

                map.set(str1[i], i);
            }

            for (let i = 0; i < str2.length; i++) {
                if (map.has(str2[i])) {
                    map.delete(str2[i]);
                    check = true;
                }
            }

            return check;
        }

        console.log(areAnagrams02O(str1, str2));
    }


    {
        console.log("02. check if two strings are anagram - optimised - countApproach");
        const str1 = "listen";
        const str2 = "silent";

        function areAnagrams02C(str1, str2) {

            if (str1.length !== str2.length) {
                return false;
            }

            let count = {};
            for (let char of str1) {
                count[char] = (count[char] || 0) + 1;
            }

            for (let i = 0; i < str2.length; i++) {
                if (!count[str2[i]]) {
                    return false;
                }
                count[str2[i]]--;
            }
            return true;
        }
        console.log(areAnagrams02C(str1, str2));
    }

}




{
    {
        // time complexity = O (n^2)
        // incudes has linear time complexity 

        // space complexity = O (n)
        console.log("03. remove duplicates ");
        const arr = [1, 2, 3, 2, 4, 1, 5];

        function removeDuplicates03(arr) {

            const uniqueArr = [];

            for (let i = 0; i < arr.length; i++) {

                if (!uniqueArr.includes(arr[i])) {

                    uniqueArr.push(arr[i]);
                }
            }
            return uniqueArr;
        }

        console.log(removeDuplicates03(arr));
    }


    {
        // tc - linear
        // sc - linear 
        console.log("03. remove duplicate - optimised");
        const arr = [1, 2, 3, 2, 4, 1, 5];

        function removeDuplicates03O(arr) {
            let set = new Set();

            for (let val of arr) {
                set.add(val);
            }
            return set;
        }
        console.log(removeDuplicates03O(arr));
    }


    {
        // tc = linear
        // sc = linear 
        console.log('03. remvoe duplicate - optimised - one line solution ');
        const arr = [1, 2, 3, 2, 4, 1, 5];

        function removeDuplicates031(arr){
            return new Set(arr);
        }

        console.log(removeDuplicates031(arr));
    }


}





{
    {
        // tc = linear
        // sc = linear 
        console.log('04. reverse string - using loop ')
        let str="Hello World";

        function myReverse(str){
            let revStr = '';
            for (let i = str.length - 1; i >= 0; i--){
                revStr += str[i];
            }
            return revStr;

        }

        console.log(myReverse(str));
    }

    {
        // tc = linear
        // reverse() - has linear time complexity 
        // reverse() - function works on an array

        // sc = linear 
        console.log('04. reverse string - using reverse()')
        let str="Hello World ";

        console.log(myReverse(str));
        // fucntion can be accessed from any where
        // only variable (like let & const ) are block scoped
        console.log((str.split("").reverse()).join(""));
    }


}