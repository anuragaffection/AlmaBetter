//
// Sorting Basic 
//




/*
  in this chapter 
 
  Bubble Sort
  Selection Sort
  Insertion Sort
  Merge Sort (Divide and conquer)
  QuickSort (Divide and Conquer)
  
*/





/**
 * explore quiz 
 * 
*/



/**
 * explore coding 
 * 
*/



/**
 * explore topics 
 * 
*/






/*

inbuilt sort =  ___.sort( (a, b) => a - b);
has time complexity of n (log n)



Mostly in interview they asked about time complexity & Space complexity,
which algorithm is best between all,
how they works;
and how to implement it efficiently?

*/




// 01.
// Bubble sort

/*
 

 worst tc = quadratic
 average tc = quadratic
 best tc = linear 

 sc = constant - because sorted array are stored in same array 
*/

let arr = [6,7,2,1,9,4];
console.log(bubbleSort(arr));

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 -i; j++){

            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}







// 02.
// selection sort

/*
 
 worst tc = quadratic  
 average tc = quadratic
 best tc = quadratic 

 sc = constant 

*/

let arrSelect = [7, 8, 2, 5, 1, 9];
console.log(arrSelect);
console.log("selection sort ", selectionSort(arrSelect));

function selectionSort(arrSelect){

    for (let i = 0; i < arrSelect.length; i++){

        let smallest = i;
        for (let j = i + 1; j < arrSelect.length; j++){

            if (arrSelect[smallest] > arrSelect[j]){
                smallest = j;
            }
        }

        let temp = arrSelect[i];
        arrSelect[i] = arrSelect[smallest];
        arrSelect[smallest] = temp;
    }
    return arrSelect;
}







// 03.
// Insertion sort 
// shifting of element

/*



worst time complexity = quadratic
average time complexity = quadratic 
best time complextiy = linear 

space complexity = constant

*/

let arrInsert = [9, 6, 3, 101, 23, 123];
console.log("Array to sort ", arrInsert);
console.log("Sorted by Insertion sort", insertionSort(arrInsert));

function insertionSort (arrInsert){
    let len = arrInsert.length;

    for (let i = 1; i < len; i++){
        let key = arrInsert[i];
        let j = i - 1;
        
        while ( j >= 0 && arrInsert[j] > key){
            arrInsert[j+1] = arrInsert[j];
            j--;
            
        }
        arrInsert[j + 1] = key;
        
    }
    return arrInsert;
    
}





// 04. 
// Merge sort

/*
worst case tc = O (n log n)
best case tc = O (n log n )
average case tc = O (n log n)

sc = O (n)

auxiliary space recall - java dsa 

*/

arr = [90, 12, 78, 43, 55];
console.log("array", arr);

console.log("Array after merge sort", mergeSort(arr));

function mergeSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let halfPoint = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0,halfPoint);
    let rightArr = arr.slice(halfPoint);

    let leftPart = mergeSort(leftArr);
    let rightPart = mergeSort(rightArr);

    return merge(leftPart, rightPart);

}

function merge(leftPart, rightPart){
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftPart.length && rightIndex < rightPart.length ){

        if (leftPart[leftIndex] < rightPart[rightIndex]){
            mergedArr.push(leftPart[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArr.push(rightPart[rightIndex]);
            rightIndex++;
        }
    }

    mergedArr.push(...leftPart.slice(leftIndex));
    mergedArr.push(...rightPart.slice(rightIndex));

    return mergedArr;
}




// 05.
// Quick sort
// spread operator is used for both iterating & concatenation

/*
worst case time complexity = O (n^2)
average case time complexity = O (n log n)
best case time complexity = O (n log n)

here sc = O (n log n)

but we can optimise space complexity by doing swapping within the array,
because quick sort is in - place sorting algorithm

*/

arr = [89, 56, 34, 890, 765];
console.log("Original Array: ", arr);
console.log("sorted array by quick sort ", quickSort(arr));

function quickSort(arr){

    if (arr.length <= 1){
        return arr;
    }

    let leftPart = [];
    let rightPart = [];

    let pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length -1; i++){
        if (arr[i] > pivot){
            rightPart.push(arr[i]);
        }
        else {
            leftPart.push(arr[i]);
        }
    }

    return [...quickSort(leftPart), pivot, ...quickSort(rightPart)];

}



{
    console.log("Quick sort in place sorting ");
}
