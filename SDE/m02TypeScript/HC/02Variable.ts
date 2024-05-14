
// string
let greetings: string = "Hello World";
console.log(greetings)
console.log(greetings.toLowerCase())

// number 
let myNum = 6;
console.log(myNum)
console.log(typeof (myNum))

// boolean 
let isUserLogged: boolean = true;
isUserLogged = false;
console.log(isUserLogged)

// number 
let userId: number = 33456;
userId = 12.345;
console.log(userId)

let someVariable1 = 56;
let someVariable2: number = 78


// any 
let hero :any; 

function getHero () {
    return 'Captain America ';
}

hero = getHero()

console.log(hero) // Captain America 
console.log(typeof(hero)) // string 







// this export, solve  temporary error of  block scope error in ts 
export { }
