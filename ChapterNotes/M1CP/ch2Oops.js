// this keywor
// apply, bind, call 
// prototype
// polymorphism, inheritance, and encapsulation.





// 01.
// creating object 
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
// object is an instance of class
// array, string, function, practically every element in javascript is an object 






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
