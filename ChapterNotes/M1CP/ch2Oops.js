// this keyword
// apply, bind, call 
// prototype
// polymorphism, inheritance, and encapsulation.





// 01.
console.log("01. creating object ");
let person = {
    firstName : "John",
    secondName : "Walker",
    getDetails : function (){
        return `Name of the person is ${this.firstName} ${this.secondName}`;
    }

}
console.log(person.firstName);
console.log(person.getDetails);
console.log(person.getDetails());

console.log(person['firstName']);
console.log(person["getDetails"]);
console.log(person['getDetails']());
console.log(person["getDetails()"]) // undefined 





// 02. 
// Object vs class
/* 
   An object is an entity that is unique and contains properties and methods.

   object is an instance of class
   
   array, string, function, practically every element in javascript is an object 
*/






// 03. 
// creating a class using class declaration 
// simple class declarations 

class rectanlge {
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
}







// 04. 
// creating a class using class expressions
// other ways to create class in javascript 

let rectanlge1 = class {
    constructor (height, width){
        this.height = height;
        this.width = width
    }
};






// 05.
console.log("05. Bind ");

let pokemon = {
    firstName : "Pika",
    secondName : "Chu",
    getDetails : function(){
        let fullName = this.firstName + this.secondName;
        return fullName;
    }
};

let pokemonName = function(){
    console.log(this.getDetails() + " - I Choose You" );
}

/* pokemonName();

   here direct calling will give error 

   so if we want to use the getDetails of previous function, we have to bind it 

*/

pokemonName.bind(pokemon); 
// this will not print anything, it is just binding, not calling


let answer = pokemonName.bind(pokemon);
answer() 
// here we are calling the function


console.log(pokemon.getDetails() + " - direct getting from pokemon");
// simple getting the name 







// 06.
console.log("06. call");









// 07. 
console.log(" 07. apply");







// 08.
console.log(" 08.  bind, call, apply - differeces");
/*
   bind, call, apply

   bind -  it bind the function or properties
   call -  it bind the function or properties + takes arguments 
   apply - it bind the function or properties + takes arguments + in array forms

*/

/*
   The call() method differs from bind() primarily in the following ways:

   - Takes extra parameters into account
   - Immediately carries out the task for which it was contacted.
   - The function being called on is not copied by the call() method.

*/


/*
    call , apply 

    The functions call() and apply() accomplish the same thing. T
    he only difference in how they operate is that 
    apply() requires an array of all of our parameters, 
    whereas call() expects each parameter to be provided in individually.

*/



