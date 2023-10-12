
// innerText vs innerHTML vs textContent 


// time note = 04:05:28




// check  in browser console


console.log(window); //  window representation 




console.log(document); // html document representation 
console.dir(document); // html document representation by browser default 






const mainHeading = document.getElementById("main-heading");

console.log(mainHeading); // what actual we had coded 
console.dir(mainHeading); // what browser had stored by default 
console.log(typeof mainHeading); // type of mainHeading == object 

console.log(mainHeading.textContent);
mainHeading.textContent = "Manage Your Life"

console.log(mainHeading.innerText);
mainHeading.innerText = "Manage Your Habbits";






// select only first encountered 
const header = document.querySelector(".header");
console.log(header);


// select all element with same class
const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);