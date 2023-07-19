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

let pokemon2 = {
    firstName : "Pika",
    lastName: "Chu",
    getDetails : function (){
        return this.firstName + " " + this.lastName;
    }
}

let pokemonName2 = function (snacks, hobby) {
    console.log("I choose you " + this.getDetails() + " & You Like " + snacks + " & " + hobby);

}

// pokemonCall() - // will give error 

pokemonName2.call(pokemon2, "sushi", "Coding");
// both binding & calling at same time









// 07. 
console.log("07. apply");

pokemonName2.apply(pokemon2, ["Maggie", "Mathematics"]);
// both printing & binding







// 08.
console.log("08.  bind, call, apply - differences");
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




// 09.
// What is oops 





// 10.
// ES classes & instance 



// 11.
// Object instances






// 12.
// prototype
console.log("12. Prototype");

class human {
    constructor(first, last, age, color) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.color = color;
    }
    fullName() {
        let answer = this.firstName + " " + this.secondName + " " + this.nationality;
        console.log(answer);
    }
}

human.prototype.nationality = "India";


// human('Sachin', "Tendulkar", "50", "Fair"); // no output







// 13.
// dunder proto or proto
// difference between proto & prototype
// prototype chaining 

console.log("13. Prototype chaining");

// function
function superType (){
    this.name = "John";
}

// prototype
superType.prototype.getSuperName = function(){
    return this.name;
} 



// function
function subType (){
    this.age = 26;
}

subType.prototype = new superType();

// prototype
subType.prototype.getSubAge = function(){
    return this.age;
}




let subTypeObject = new subType();

console.log(subTypeObject.age);
console.log(subTypeObject.name);

console.log(subTypeObject.getSubAge);
console.log(subTypeObject.getSuperName);

console.log(subTypeObject.getSubAge());
console.log(subTypeObject.getSuperName());

console.log(subTypeObject.__proto__);   // { getSubAge: [Function], __







// 14.
// inheritance & extends
console.log("14. Extend keyword");

class Car {
    constructor (name){
        this.carName = name;
    }
    present (){
        return "I have " + this.carName;
    }
}

class Model extends Car {
    constructor (name, model){
        super(name);
        this.modelName = model;
    }
    show (){
        return this.present() + " & its model is " + this.modelName;
    }
}

let  myCar = new Model("Tata Nano", "N 11");

console.log(myCar.show());
console.log(myCar.carName);
console.log(myCar.modelName);





// Quiz 
// Object.create()
// Object.getPrototypeOf()


       console.log("01. Ques- What will be the output of following code?");
       var obj = new Fun ();
       console.log(obj.constructor === fun );

       console.log("02. Javascript support method overriding  - true ");
       console.log("03. Javascript support method overloading - false "); 
       console.log("03. The keyword or the property that you use to refer to an object through which they were invoked is --- this");





