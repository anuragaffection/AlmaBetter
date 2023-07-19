/**
 *   Linear Search
 *   Binary Search 
 *   HashMap
 * 
 *   some important interview questions
*/




/** 
 *   Patrons  - 
 *   Sentinel - 
 * 
 *  
*/





/**
 *   Linear Search - is also called as Sequential Search
 *   
 *   Worst case tc   = linear
 *   Average case tc = linear 
 *   Best case tc    = linear 
 * 
 *   space complexity = constant
 * 
 * 
 *   Types of Linear Search -
 *      01. Simple Linear Search
 *      02. Last Occurrence Linear Search
 *      03. Recursive Linear Search
 *      04. Sentinel Linear Search
 * 
 * 
 *   Advantages & disadvantages of linear search
 *   
 *   Real life uses of binary search 
 * 
*/

let arrLinear = [56, 78, 23, 54, 12, 78, 124];
let target = 78;




console.log("01. simple Linear Search");
console.log("found at index = ", linearSearch(arrLinear, target));

function linearSearch (arr, target){
    for (let i = 0; i < arr.length; i++){
        if (target === arr[i]){
            return i;
        }
    }
    return -1;
}






console.log("02. Last occurrence Linear Search");
console.log(arrLinear);
console.log("Last occurrence is at index = ", lastLinearSearch(arrLinear, target));

function lastLinearSearch (arr, target){
    let lastIndex = -1;
    for (let i = 0; i < arr.length; i++){
        if (target === arr[i]){
            lastIndex = i;
        }
    }
    return lastIndex;
}






console.log("03. Recursive Linear Search");
console.log(arrLinear);
console.log(`${target} is at : `, recursiveLinearSearch(arrLinear, target));

function recursiveLinearSearch(arr, target, start = 0){
    if (start >= arr.length){
        return -1; 
        // not found condition
        // base case , to stop recursion , when start will increase
    }
    if (arr[start] === target){
        return start;
    } 
    
    return recursiveLinearSearch(arr, target, start+1) 

}







console.log("04. Sentinel Linear search");
console.log(arrLinear);
console.log("found at = ", sentinelLinearSearrch(arrLinear, target));

function sentinelLinearSearrch (arr, target){
    let lastIndex = arr.length - 1;

    let lastValue = arr[lastIndex];
    arr[lastIndex] = target;

    let i = 0;
    while(arr[i] != target){
        i++;
    }

    arr[lastIndex] = lastValue;
    // making array as original array

    if (i < lastIndex || arr[lastIndex] === target){
        return i;
    }

    return -1;
}





/**
 *   Binary Search -- works with sorted array 
 * 
 *   worst case time complexity   == O ( log n )
 *   Average case time complexity == O ( log n )
 *   Best case time complexity    == O (1)
 * 
 *   Space time complexity == O (1)
 * 
 *   advantage & disadvantage of binary search
 *   
 *   real life uses of binary search
 *   
*/

console.log("05. Binary Search");
let arrSorted = [12, 23, 34, 56, 78, 89];
target = 78;
console.log(arrSorted);
console.log("foun at index = ", binarySearch(arrSorted, target));

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor( (start + end) /2 );

        if (arr[mid] === target){
            return mid;
        } else if ( arr[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}






/**
 *   Explore 
 *   ---- Array.prototype.slice()
 *   ---- Array.prototype.splice()
*/






/**
 *   HashMap in Javascript
 * 
 *   --- Object & Hashmap are same 
 *   --- JavaScript does not have a built-in Hashmap 
 *   --- A hashmap in JavaScript is implemented 
 *        using an object, a built-in data type in the language.  
 * 
 *   --- Object vs Map vs HashMap
 *   --- Chaining & Hashing 
 *       Chaining & open addressing is used to prevent from collisions
 * 
 *   --- Hashmap can be implemented using both object & Map
 *   --- Object always store key as string
 *   --- Map can store key as any value
 * 
 *   --- The time complexity of a hashmap is O(1) 
 *       for insertion, deletion, and retrieval operations.
 * 
 * 
*/


console.log("06. Implemenation of hashmap using object.");
class HashMap {
    constructor (){
        this.mapData = {}; 
        // private property to hold actual map
    }
    
    insert(key, value){
        this.mapData[key] = value;
    }

    get(key){
        return this.mapData[key]
    }

    remove(key){
        delete this.mapData[key];
    }

    contains(key){
        return key in this.mapData;
    }

    isContains(key){
        if (this.get(key) === undefined || null ){
            // here get(key) is defined above
            // this is not a pre defined function
            return false;
        }else {
            return true;
        }

    }

    key(){
        var arr=[];
        for (var k in this.mapData) {
            arr.push(k);
        }
        return arr;
    }

    key2(){
        return Array.from(Object.keys(this.mapData));
        // HERE OBJECT.KEYS --- IS INBUILT 
    }

    key3(){
        return Object.keys(this.mapData);
        // HERE OBJECT.KEYS --- IS INBUILT
    }

    value(){
        return Object.values(this.mapData);
        // here object.values ---- is inbuilt
    }

    size (){
        let count=0 ;
        for (let i in this.mapData ) {
            ++count;
        };
        return count;
    }

    size2(){
        const keysArr = Object.keys(this.mapData).length;
        // HERE OBJECT.KEYS --- IS INBUILT
        return keysArr;
    }

}

let myHashMap = new HashMap();
myHashMap.insert("Name", "John")
myHashMap.insert("Age", "45");

console.log(myHashMap);

console.log('Keys:', myHashMap.key());
console.log('Keys:', myHashMap.key2());
console.log('Keys:', myHashMap.key3());

console.log('values : ', myHashMap.value());

console.log("get value : ", myHashMap.get("Name"));
console.log("is contains : ", myHashMap.isContains("Age"));
console.log("is contains : ", myHashMap.isContains("age"));
console.log('contains ', myHashMap.contains("Age"));
console.log('contains ', myHashMap.contains('age'));

console.log("size : ", myHashMap.size());
console.log("size : ", myHashMap.size2());






// 07.
console.log("find index that sum up the target");
let nums = [4, 2, 5, 17, 9];
let sum = 11;
let result = twoSum(nums, sum);
console.log(result); 

function twoSum (nums, sum){
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === sum){
                return [i, j];
            }
        }
    }
}






// 08.
console.log("sum of two number - optimised ");
let numsOpt = [4, 2, 5, 17, 9];
let sumOpt = 11;
let resultOpt = twoSumOpt(numsOpt, sumOpt);
console.log(resultOpt); 

function twoSumOpt(arr, sum){
    const hashmap = new Map();

    for (let i = 0; i < arr.length; i++){
        let complement = sum - arr[i];

        if (hashmap.has(complement)){
            return [hashmap.get(complement), i];
        }

        hashmap.set(arr[i], i);
    }
    return null;
}






/*
  fill in the blanks


  01. The time complexity of the binary search 
      algorithm is ________ 
        a.  O(n)
        b.  O(1)
        c.  O(log n) 
    


  02. The time complexity of the linear search 
      algorithm is ________ 
        a.  O(N)
        b.  O(log N)
        c.  O(1) 



  03. In binary search, the search interval is adjusted 
      based on whether the  _________ (first/last/middle) element 
      is less than or greater than the target value. 
       



  04. The time complexity of linear search grows ___________ 
      (exponentially/linearly/quadratically) with the size of 
      the data set. 
      In contrast, the time complexity of binary search grows -
      logarithmically with the size of the data set.



    
    answer 
    01.  (O(log n))
    02.  (O(N))
    03.  (middle)
    04.  (linearly)

*/



/*

   Agree & Disagree

   01. Does the hashmap approach's time complexity 
       depend on the input array's size?


   02. Do hashmaps provide constant-time access to values, 
       regardless of the collection size? 


   03. Is it necessary to use linked lists to store 
       key-value pairs in a hashmap? 


   04. Can hashmaps be used to encrypt sensitive data 
       in a web application? 



    answer
    01. Agree
    02. Agree
    03. Disagree
    04. Disagree

*/



/*

   true or false 


    01. A hashmap is used to organize and locate 
        books within a library. 


    02. JavaScript has a built-in Hashmap data structure. 


    03. The keys in a Map object can be of any data type, 
        including objects and functions.



    04. A hash table's efficiency depends on the hash function's 
        quality and the strategy used to handle collisions. 



    answer 
    01. true
    02. false
    03. true
    04. true

*/


/**
 *   Explore Extra 
 * 
 * 
 *   01. What do the initials "SHA" stand for?
 *   --- Secure Hashing Algorithm
 * 
 *   02. What is the most popular bit-length for SHA-2?
 *   --- 256-bit
 *    
 *   03. What is the term used to describe two 
 *       different values producing the same hash?
 *   --- Collision
 * 
 *   04. Which algorithm did the SSL industry 
 *       transition to in 2015?
 *   --- SSL (Secure Socket Layer )
 *   --- SHA-2
 * 
 * 
 * 
 * 
*/



/**
 *   MCQs quiz
 * 
 * 
 * 
 * 
 *  01. Binary search can only be used with numerical data types.
 *      --- a. true
 *      --- b. false
 * 
 *  ans --- false 
 *  exp --- Binary search can be used with any data type that can
 *          be compared, 
 *          not just numerical data types.
 * 
 *   
 * 
 * 
 * 
 * 
 * 
 * 
 *  02. Which of the following is not a prerequisite for 
 *      binary search?
 *      --- a. The data must be sorted
 *      --- b. The data must be in an array
 *      --- c. The data must be integers
 *      --- d. The data must not have duplicates
 * 
 *  ans --- The data must be integers
 *  exp --- The data doesn't have to be integers, 
 *          it could be any data type that can be compared.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  03. Which built-in method in JavaScript can be used -
 *      to remove all key-value pairs from a HashMap?
 *      --- a. clear()
 *      --- b. deleteAll()
 *      --- c. removeAll()
 *      --- d. empty()
 * 
 *  ans --- clear()
 *  exp --- The clear() method in JavaScript can be used 
 *          to remove all key-value pairs from a HashMap, 
 *          like so: map.clear() 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 *  04. Which of the following is NOT a valid method -
 *      to add a key-value pair to a HashMap in JavaScript?
 *      --- a. map.set(key, value)
 *      --- b. map.put(key, value);
 *      --- c. map[key] = value
 *      --- d. All of the above are valid methods.
 * 
 *  ans --- b. map.put(key, value);
 * 
 *  exp --- The put() method is not a valid method for 
 *          adding a key-value pair to a HashMap in 
 *          JavaScript. 
 * 
 *          The correct method is set(). 
 * 
 *          Option c is also a valid method for adding a -
 *          key-value pair to a plain object, 
 *          but not a HashMap.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  05. What happens if you try to access a non- existent 
 *      key in a HashMap in JavaScript?
 *      --- a. The program throws a syntax error.
 *      --- b. The program throws a type error.
 *      --- c. The program returns undefined.
 *      --- d. The program crashes.
 * 
 *  ans --- If you try to access a non-existent key
 *          in a HashMap in JavaScript, 
 *          the program returns undefined.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  06. Which of the following is a good use case for
 *      a HashMap?
 *      ---- a. Storing a sorted list of integers
 *      ---- b. Implementing a stack data structure
 *      ---- c. Counting the frequency of words in a 
 *              text document
 *      ---- d. Storing a collection of objects with 
 *              complex relationships
 *  
 *  ans ---- A HashMap is a good data structure to use 
 *           when you need when to store key-value pairs 
 *           and look them up quickly. 
 * 
 *           One common use case is counting the frequency 
 *           of words in a text document,
 *           where the words are the keys and the counts 
 *           are the values.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  07. Which built-in method in JavaScript can be used 
 *      to retrieve the number of key-value pairs in 
 *      a HashMap?
 *      ---- a. size()
 *      ---- b. length()
 *      ---- c. count()
 *      ---- d. number()
 * 
 *  ans ---- The size() method in JavaScript can be used to 
 *           retrieve the number of key- value pairs in a 
 *           HashMap, 
 *           like so: map.size
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  08. Which of the following is true about the worst-case 
 *      space complexity of binary search?
 *      --- a. The worst-case space complexity is O(1) 
 *      --- b. The worst-case space complexity is O(n) 
 *      --- c. The worst-case space complexity is O(log n) 
 *      --- d. The worst-case space complexity depends 
 *             on the specific implementation 
 * 
 *  ans ---- Binary search has a worst-case space complexity of O(1) 
 *           because it only requires a few variables to keep track of 
 *           the search space and mid element.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  09. Linear search is always slower than binary search. 
 *      --- a. True 
 *      --- b. False
 * 
 *  ans --- Linear search is slower than binary search 
 *          for large arrays, but for small arrays, 
 *          the time complexity of linear search may be 
 *          lower than that of binary search.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   10. What is the time complexity of linear search in the worst case?
 *       --- O(1)
 *       --- O(n) 
 *       --- O(logn) 
 *       --- O(n log n)
 * 
 *   ans --- In the worst case, the time complexity of linear search 
 *           is O(n) because it has to search through each element 
 *           of the array.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   11. Which search algorithm is faster for larger array ?
 *   ans - It depends on specific array and value being searched.
 * 
 * 
 * 
 * 
 * 
 *   12. How do you check if a hashmap contains specific key ?
 *   ans - hashmap.has(key)
 * 
 * 
 * 
 * 
 * 
 *   13. What happens when the data is not 
 *       sorted before the binary search ?
 * 
 *   ans - the search algorithm will works 
 *         but may result incorrect answer.
 * 
 * 
 * 
 * 
 * 
 *   14. What is the main idea behind the binary Search ?
 *   ans - divide and conquer
 * 
 * 
 * 
 * 
 * 
 *   15. Which search algorithm have time complexity of O(n) ?
 *   ans - linear search
 * 
 * 
 * 
 * 
 * 
 *   16. What is the difference between Hashmap & object in javascript ?
 *   ans - a hashmap store key - value pairs while 
 *         object store only properties.
 *       - a hashmap has built in hash function, 
 *         while object does not 
 * 
 *   exp - In JavaScript, both Hashmap/ Map and Object 
 *         can be used to store key-value pairs. 
 * 
 *         However, there are some important differences between 
 *         the two that make using a Map better in certain situations.
 *
 *         In Object, the data-type of the key-field is restricted 
 *         to integer, strings, and symbols. (if a number is stored as key 
 *         in object, its type will be string).
 *         Whereas in Map, the key-field can be of any data-type 
 *         (except null & undefined) integer, an array, even an object.
 *
 *         In the Map, the original order of elements is preserved. 
 *         This is not true in case of objects.
 *
 *         The Map is an instance of an object but 
 *         the vice-versa is not true .
 *
 *         You can get the size of a Map easily while you have to 
 *         manually keep track of size for an Object 1.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   17. What is the time complexity of retrieving -
 *       a value from Hashmap in worst case?
 * 
 *   ans - linear time 
 *   exp - Generally time complexity is constant in 
 *         hashmap for retrieving value,
 *         but in worst case all the keys of hashmap 
 *         could hash to same index, resulting in linear search time.
 * 
 * 
 * 
 *   18. Which algorithm is best to use when array is sorted ?
 *   ans - Binary search 
 * 
 * 
 * 
*/



