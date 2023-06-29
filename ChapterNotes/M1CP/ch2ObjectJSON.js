console.log("Object & Json ");




// creating object by object literal method

console.log("\n \n Creating object by object literal method");

let person = {
    name : "Anurag",
    age : 21,
};

console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);






// creating object by constructor method

console.log("\n \n Creating object by object constructor method");

let person1 = new Object();

person1.name = "Anu";
person1.age = 21;

console.log(person1.name);
console.log(person1.age);
console.log(person1["name"]);
console.log(person1["age"]);






// javascript nested object

console.log("javascript nested object ");

let cricketer = {
    hisName : "Sachin 10",
    isCaptain : false,
    playIPL : true,
    address : {
        pin : 829204,
        city : "Mumbai",
        state : "Maharashtra"
    },
    total100 : 100,
};


console.log(cricketer.hisName);
console.log(cricketer.total100);
console.log(cricketer.address.state);

console.log(cricketer["hisName"]);
console.log(cricketer["address"]["city"]);
console.log(cricketer["total100"]);




// modify existing property

cricketer.hisName = "Sachin Tendulkar";
cricketer["total100"] = 200;
cricketer.address.pin = 987654;
console.log(cricketer);




// adding new property

cricketer.nickName = "God of Cricket ";
cricketer["address"]["country"] = "India"
console.log(cricketer);




// delete new property

delete cricketer.isCaptain;
delete cricketer['address']['pin'];
console.log(cricketer);





// some predefined object method
// these all three method will return array 

let crickProperty = Object.keys(cricketer);
console.log("array of property ");
console.log(crickProperty);


let crickValues = Object.values(cricketer);
console.log("array of values");
console.log(crickValues);

let allCrickValue = Object.entries(cricketer);
console.log("array of array of property & value - 2d array ");
console.log(allCrickValue);


