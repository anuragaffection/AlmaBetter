// Getting started with Algorithm


/**
 *   Sylllabus of this chapter
 * 
 * 
 *   What is data structure 
 * 
 *   classification of data structure 
 *   --- primitive data structure 
 *   --- non primitive data structure 
 *   --- Linear data structure 
 *   --- Non linear data structure 
 * 
 *   primitve data structure 
 *   --- Number 
 *   --- String 
 *   --- Boolean 
 *   --- null
 *   --- undefined 
 *   --- symbol
 * 
 *   Non primitve data structure 
 *   --- Array 
 *   --- Object 
 *   --- Map 
 *   --- Set
 * 
 *   Linear data structure 
 *   --- arrays
 *   --- Linked lists 
 *   --- queues
 *   --- stacks
 * 
 *   Non Linear Data structure 
 *   --- tree
 *   --- graph
 * 
 * 
 *   
*/

/**
 * 
 *   What is an algorithm 
 *   -- pseudocode 
 *   -- flowchart 
 * 
 *   Algorithmic analysis
 *   -- time complexity 
 *   -- space complexity 
 * 
 *   Asymptotic analysis
 *   -- Big O notation
 *   -- Big Omega notation
 *   -- Big theta notation
 * 
 * 
 */


/* 
 Some more points to discuss

  01. symbol data types 
  02. some special numeric value
  03. SOME PROPERTIES OF PRIMITIVE DATA STRUCTURE 
  04. Object vs Map vs Hashmap
  05. Map in details
  06. Set in details
  07. Linked list
  08. Tree
  09. Problem of flip coins 

*/


// 01.
// Symbol






/*  
  02.
  some special numeric value

   NaN

   Infinity
   -Infinity 

   Number.MIN_VALUE
   Number.MAX_VALUE

   Number.POSITIVE_INFINITY
   Number.NEGATIVE_INFINITY


*/



/* 
  03.
  SOME PROPERTIES OF PRIMITVE DATA STRUCTURE 

   It is a basic data types 
   it is not a object types 
   do not have any method
   do not have any properties 
   they are immutable 

*/






/*
  04.
  Object vs Map

   Object - Key or properties is object are always string types.
   Map - key can be of any types 

   both object & map store values as key-value pair

*/




// 05. 
// Map in details 

/* 
  new Map() – creates the map.
  map.set(key, value) – stores the value by the key.
  map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
  map.has(key) – returns true if the key exists, false otherwise.
  map.delete(key) – removes the element (the key/value pair) by the key.
  map.clear() – removes everything from the map.

*/






// 06.
// Set in details 
// set store unique value only 
// it is like an array wit unique value only
// set are object 
// set do not have key 
// set has only value stored 
// both key & value returns value.

/*
  
   new Set() – creates the set.
   set.add(value) – adds a new element with the given value to the set.
   set.delete(value) – removes the element with the given value from the set.
   set.has(value) – returns true if the set contains an element with the given value, false otherwise.
   set.clear() – removes all elements from the set.
   set.size – returns the number of elements in the set.

*/






// 07.
// Linked List 
console.log("Linked List Creation ")
let linkedList = {

    head : {

        data : 1 ,
        next : {

            data : 2 ,
            next : {

                data : 3 , 
                next : {

                    data : 4 , 
                    next : null
                }

            }
        }
    }
}

console.log(linkedList);





// 08.
// Tree
console.log("Tree Creation ")
let tree = {

    value: 1,

    left: {
      value: 2,
      left: null,
      right: null
    },

    right: {
      value: 3,
      left: null,
      right: {
        value: 4,
        left: null,
        right: null
      }
    }
};

console.log(tree);




// 09. 

/* You are given a function performCoinFlips(numFlips) that simulates a sequence of coin flips. 

The function takes an integer numFlips as an argument, representing the number of times you will flip the coin. 
The function returns the total time taken to perform the entire sequence of flips.
Each coin flip takes one unit of time, regardless of the outcome (Heads or Tails). 
Additionally, if the result of a flip is Heads, you add another coin to your hand before the next flip. 
When flipping all the coins in your hand, it takes an additional unit of time for each coin to present.

Write a JavaScript program that utilizes the performCoinFlips function to solve the following problem:

Given a specific number of coin flips, find the total time taken to perform the flips.
Implement the function findTotalTime(numFlips) that takes an integer numFlips as an argument and returns the total time taken. ?
*/

console.log("Flip problem ");

   function flipCoin() {
       return Math.random() < 0.5 ? 'Heads' : 'Tails';
       // Math.random generates a number between 0 & 1 .
       // 0.5 making the probabiltiy eqal to half 
        
    }
  

    function performCoinFlips(numFlips) {

      let coins = 1;
      // assume we have one coins at the beginning before flipping 

      let totalTime = 0;
    
        for (let i = 0; i < numFlips; i++) {

            const result = flipCoin();
            totalTime++; 
            // Cost of flipping the coin
      
            if (result === 'Heads') {
                coins++;
                // increasing the coins when heads comes 
            }

            totalTime += coins; 
            // Cost of flipping all the coins in hand
            // we have to flip all the coins in our hand 
        }

        return totalTime;
    }
  
  // Testing the function with 10 flips
  // we have 1 coins, 10 flips 
  const numFlips = 10;
  const timeTaken = performCoinFlips(numFlips);
  console.log(`Total time taken for ${numFlips} flips: ${timeTaken}`);
  // here the answer is not specific 
  // it is totally based on random number generated by Math.random()





/*
  10.


*/




