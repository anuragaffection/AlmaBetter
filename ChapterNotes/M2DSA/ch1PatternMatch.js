
//
// Regular Expressions





// 01.
// regex creation
/* 
  It define a search pattern that can be used to search for things in a string.

*/
let regex = /hello/;
let regex1 = new RegExp("hello");





//  02.
// .test() - return true or false 

console.log("02. test () ");

let myString = "Hello, World !";
let myRegex = /Hello/;

let result = myRegex.test(myString);
console.log(result);





//  03.
//  Literal Matching 
//  regex is case sensitive 
console.log("Literal Matching ");

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let waldoRegexCaptial = /WALDO/;

let rWaldoRegex = waldoRegex.test(waldoIsHiding);
let rWadloRegexCapital = waldoRegexCaptial.test(waldoIsHiding);

console.log(rWaldoRegex); // true
console.log(rWadloRegexCapital); // false 





//  04. 
//  matching multiple pattern 
//  pipe | is used as or in regex
//  will match any of thses four words 

let petStr = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petStr);

console.log(petResult); // true





//  05.
//  flag - i
//  i - ignore case
//  flag added last to last of regex
console.log("how to overcome case sensitivity in regex");

let fccString = "FreeCodeCamp";

let fccRegex = /freecodecamp/ ;
let fccRegex1 = /freecodecamp/i ;

let fccResult = fccRegex.test(fccString); // false 
let fccResult1 = fccRegex1.test(fccString); // true

console.log(fccResult);
console.log(fccResult1);






//  06. 
//  .match()
//  return string in array format 
console.log("Extract Matches");

let extString = "Extract the word 'coding' from this stirng .";
let codeRegex = /coding/;
let codeResult = extString.match(codeRegex);
console.log(codeResult);






// 07.
// i - ignore case - will ignore case sensitivity
// g - global find - will found all the matches 
console.log("find more than the first match");

let testStr = "Repeat, Repeat, Repeat ";
let testRegex = /Repeat/;
let testResult = testStr.match(testRegex);
console.log(testResult);

let twinStr = "Twinkle , Twinkle, little star ";
let twinRegex = /TWINKLE/ig; 
let twinResult = twinStr.match(twinRegex);
console.log(twinResult);





//  08.
//  . (period or dot ) 
//  at . (dot) there will be any character 
console.log("Match anything with wildcard period ");

let humStr = "I'll sing hum Hum Humm song";
let hugStr = "Bear hug , Dear Hug, Hugges ";

let huRegex = /hu./ig;

let humResult = humStr.match(huRegex); // hum Hum Hum
let hugResult = hugStr.match(huRegex); // hug Hug Hug

console.log(humResult);
console.log(hugResult);




// 09.
console.log('Exploring dot or period ');
let exampleStr = "Let's have fun & run with regular expressions.";

let exampleRegex = /.un/;
let exampleRegex1 = /.un/g;

let exampleResult = exampleStr.match(exampleRegex);
let exampleResult1 = exampleStr.match(exampleRegex1);

console.log(exampleResult);
console.log(exampleResult1);





// 10
// 
console.log("Match single character with multiple possibilities");

let quotStr = "Beware of bugs "






