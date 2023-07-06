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
console.log("Reverse - using swapping ");
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
console.log("Reverse - using reverse function ");
console.log(myArray);
console.log(myArray.reverse());



// array destructuring 
// tc - linear 
// sc - constant
console.log("Reverse - using array destructuring ");
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
console.log("second smallest - normal approach");
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
console.log("second smallest  - Optimised code ");
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
console.log("Finding the common element");
let arr1 = [1,2,3,4,5,6,3];
let arr2 = [3,4,5,6,7,8,9,3];



// tc - linear 
// sc - constant 
console.log("Common element - using array only");
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
console.log("Common element - using sets ");
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


