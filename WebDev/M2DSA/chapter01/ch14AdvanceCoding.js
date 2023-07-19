//
// Advance coding & Analysise
//


let myArray = [3, -3, 6, 6, 8, 4, 9, 5];


// 01.
// find the greatest element present in an array


// tc = linear 
// sc = constant
console.log("01. Normal Approach ");
console.log(myArray);
console.log(findMaxElement(myArray));

function findMaxElement (myArray){
    let length = myArray.length;
    let greatest = myArray[0];

    for (let i = 1; i < length; i++){
        if (myArray[i] > greatest){
            greatest = myArray[i];
        }
    }

    return greatest;
}



// spread operator will iterate all over the array 
console.log("01. using Math.max() & ... spread operator ");
console.log(myArray);
console.log(Math.max(...myArray));



// cheking corner cases 
// tc - linear
// sc - constant 
console.log("01. Making Optimised by chekcing corner cases ");
console.log(myArray);
console.log(findMaxElementOpt(myArray));

function findMaxElementOpt (myArray){
    let length = myArray.length;
    let greatest = myArray[0];

    if (length === 0){
        return "Array is Empty"
    }

    for (let i = 1; i < length; i++){
        if (myArray[i] > greatest){
            greatest = myArray[i];
        }
    }

    return greatest;
}










// 02. 
// reverse an array in place 


// tc = linear 
// sc = linear / constant - check 
// it is storing in same array
console.log("02. Reverse - using swapping ");
console.log(myArray);
console.log(reverseArray(myArray));

function reverseArray (myArray){
    let startIdx = 0;
    let endIdx = myArray.length - 1;

    while(startIdx < endIdx){

        let temporary = myArray[startIdx];
        myArray[startIdx] = myArray[endIdx];
        myArray[endIdx] = temporary;

        startIdx++;
        endIdx--;
    }

    return myArray;
}



// using reverse() - function
console.log("02. Reverse - using reverse function ");
console.log(myArray);
console.log(myArray.reverse());



// array destructuring 
// tc - linear 
// sc - constant
console.log("02. Reverse - using array destructuring ");
console.log(myArray);
console.log(reverseArrayOpt(myArray));

function reverseArrayOpt(myArray){
    let startIdx = 0;
    let endIdx = myArray.length - 1;

    while (startIdx < endIdx){
        [ myArray[startIdx],  myArray[endIdx] ] = [ myArray[endIdx], myArray[startIdx] ];

        startIdx++;
        endIdx--;
    }

   return myArray;
}









// 03.
// find second smallest element in an array


// spread operator to iterate over 
// tc = linear * log
// sc = constant 
console.log(" 03. second smallest - normal approach");
console.log("myarray", myArray);
console.log(secondSmallest(myArray));

function secondSmallest(myArray){
    let sortedArray = myArray.sort( (a, b) => a - b);
    console.log("sorted array", sortedArray);

    let mySet = new Set (sortedArray);
    console.log("Set = ", mySet)

    let uniqueArray = [...mySet];
    console.log("unique array = ", uniqueArray);

    if (uniqueArray.length < 1){
        return "No second smallest element possible "
    } 
    else {
        return uniqueArray[1];
    }
}



// tracking both smallest and second smallest 
// tc = linear 
// sc = constant
console.log("03. second smallest  - Optimised code ");
console.log(myArray);

myArray = [3, -3, 6, 6, 8, 4, 9, 5];
console.log(myArray);

console.log(secondSmallestOpt(myArray));

function secondSmallestOpt (myarray) {
    let smallest = Infinity;
    let secondSmallest = myarray[0];

    for (let i = 0 ; i < myArray.length; i++){

        if (myArray.length < 2){
            return "Enter more number in an array "
        }
        else if (myArray[i] < smallest){
            smallest = myArray[i];

            if (secondSmallest < smallest){
                smallest = secondSmallest;
                secondSmallest = smallest;
            }
        }
    }
    return secondSmallest;
}










// 04
// finding the common element from sorted array 
console.log("04. Finding the common element");
let arr1 = [1,2,3,4,5,6,3];
let arr2 = [3,4,5,6,7,8,9,3];



// tc - linear 
// sc - constant 
console.log("04. Common element - using array only");
console.log(findCommon(arr1, arr2));

function findCommon(arr1, arr2){
    let common = [];

    for (let i = 0; i < arr1.length; i++){
        if ( !common.includes(arr1[i]) && arr2.includes(arr1[i]) ) {
            common.push(arr1[i]);
        }
    }
    return common;
}



// using set 
// set - always store unique value
// tc - linear 
// sc = constant 
console.log("04. Common element - using sets ");
console.log(findCommonOpt(arr1, arr2));

function findCommonOpt(arr1, arr2){
    let mySet = new Set (arr2);
    let common = [];

    for (let i = 0; i < arr1.length; i++){

        if (mySet.has(arr1[i])){
            common.push(arr1[i]);
            mySet.delete(arr1[i]);
        }
    }
    return common;
}










// 05. 
// longest substring without repeating 

// undestand the break in detatils
// The break keyword in JavaScript is used to terminate the current loop or switch statement 
// if there are nesting , then break will break through the current loop

// know how to debug code  

// finding the longest substring without repeating characters;

let myString = "abcaefghadiba";

console.log("05. Longest substring wihtout repeating - Brute force");
console.log(myString);

console.log(longestSubstringWithoutRepeating(myString));

function longestSubstringWithoutRepeating(myString){
    let longestSubstring = "";

    for (let i = 0; i < myString.length; i++){
        let substring = "";

        for (let j = i; j < myString.length; j++){

            if (substring.includes(myString[j])){
                break;
            } 
            substring += myString[j];
        }

        if (substring.length > longestSubstring.length){
            longestSubstring = substring;
        }
    }
    return longestSubstring;
}




// sliding window algorithm
// tc - linear 
// sc - linear 
console.log("05. Longest substring without repeating - optimised code ");
console.log(myString);
console.log(slidingWindow(myString));

function slidingWindow (myString){
    let start = 0; // starting index of sliding window 
    let longestSubstring = "";
    let myMap = new Map(); 

    for (let end = 0; end < myString.length; end++){

        if (myMap.has(myString[end])){
            let newStartPoint = myMap.get(myString[end]) + 1;
            start = Math.max(start,newStartPoint);
        }

        myMap.set(myString[end], end);

        let substring = myString.slice(start, end + 1);

        if (substring.length > longestSubstring.length){
            longestSubstring = substring;
        }
    }
    return longestSubstring;

}







// 06.
// find first non repeating characters 

let myLove = "lovealmario";

console.log('06. first non repeating characters - Brute force ');
console.log(nonRepeating(myLove));

function nonRepeating(myLove){

    let isRepeat = false;


    for (let i = 0; i < myLove.length; i++ ){

        for (let j = i+1; j < myLove.length; j++){

            if (myLove[i] === myLove[j]){
                isRepeat = true;
                break;
            }
            else{
                isRepeat = false;
            }
        }
        
        if (isRepeat === false){
            return myLove[i];
        }
    }
    return null;
}













