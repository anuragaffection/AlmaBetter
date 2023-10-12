
// solution 01 

function calculateTotal(cart) {
    
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    return total;
}








// solution 02 

function calculateTotal2 (cart){

    let total = cart.reduce( (accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    return total;
}





// Do not modify the below lines
module.exports = { calculateTotal };






const cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
];

console.log("soln 01 = ", calculateTotal(cart));
//   Output: 2200

console.log("soln 02 = ", calculateTotal2(cart));
//   Output: 2200 
 







/*

   Solution 01 
   --- for loop 
   --- time complexity  = linear 
   --- space complexity = constant 




   Solution 02 
   --- reduce()
   --- time complexity  = linear 
   --- space complexity = constant 



*/