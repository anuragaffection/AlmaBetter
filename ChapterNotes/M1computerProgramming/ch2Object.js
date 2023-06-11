console.log("Object & Json ");



// creating object by object literal method
console.log("Creating object by object literal method");
let person = {
    name : "Anurag",
    age : 21,
};

console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);



// creating object by constructor method
console.log("Creating object by object constructor method");
let person1 = new Object();
person1.name = "Anu";
person1.age = 21;

console.log(person1.name);
console.log(person1.age);
console.log(person1["name"]);
console.log(person1["age"]);