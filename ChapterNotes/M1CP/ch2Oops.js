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