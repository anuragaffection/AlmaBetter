module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {

    let set = new Set (array2);
    let intersection = [];

    
    for (let num of array1){

        if ( set.has(num) && ( !intersection.includes(num)) ){
            intersection.push(num);
        }
    }
    
    return intersection;

}






let array1 = [1, 2, 2, 3, 4, 5];
let array2 = [2, 3, 3, 6];
console.log(arrayIntersection(array1, array2));
// Output: [2, 3]








/*
   explanation 

   time complexity  = quadratic 
   space complexity = linear 


*/
