
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
console.log("03. Literal Matching ");

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

let petStr = "04. James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petStr);

console.log(petResult); // true





//  05.
//  flag - i
//  i - ignore case
//  flag added last to last of regex
console.log("05. how to overcome case sensitivity in regex");

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
console.log("06. Extract Matches");

let extString = "Extract the word 'coding' from this stirng .";
let codeRegex = /coding/;
let codeResult = extString.match(codeRegex);
console.log(codeResult);






// 07.
// i - ignore case - will ignore case sensitivity
// g - global find - will found all the matches 
console.log("07. find more than the first match");

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
console.log("08. Match anything with wildcard period ");

let humStr = "I'll sing hum Hum Humm song";
let hugStr = "Bear hug , Dear Hug, Hugges ";

let huRegex = /hu./ig;

let humResult = humStr.match(huRegex); // hum Hum Hum
let hugResult = hugStr.match(huRegex); // hug Hug Hug

console.log(humResult);
console.log(hugResult);




// 09.
// . - any charcter at the place of dot 
console.log('09. Exploring dot or period ');
let exampleStr = "Let's have fun & run with regular expressions.";

let exampleRegex = /.un/;
let exampleRegex1 = /.un/g;

let exampleResult = exampleStr.match(exampleRegex);
let exampleResult1 = exampleStr.match(exampleRegex1);

console.log(exampleResult);
console.log(exampleResult1);






// 10
// any character [] - from big bracket;
console.log("10. Match single character with multiple possibilities");

let quotStr = "Beware of bugs in the above code; I have only proved it correctly";

let vowelRegex = /[aeious]/ig;
let bgRegex = /b[aiu]g/;

console.log(quotStr.match(vowelRegex));
console.log(quotStr.match(bgRegex));





// 11.
// range of letters 
console.log("11. Match Letters of the Alphabet ");

let alphabetString = 'The quick brown fox jumps over a lazy dog.';
let alphaRegex = /[a-z]/ig;
console.log(alphabetString.match(alphaRegex));






// 12.
// range of letters
// range of numbers
console.log("12.Match number & letters of alphabet ");

let mixString = "Bluebery 3.141429876544s are delicious.";

let mixRegex = /[0-9a-z]/ig;
let mixRegex1 = /[0-4a-e]/ig;

console.log(mixString.match(mixRegex));
console.log(mixString.match(mixRegex1));






// 13
// ^ - negate 
console.log("13. Match single character not specified ");

let miceStr = "3 Blind Mice.";

let miceRegex = /[0-9aeiou]/ig;
let miceRegex1 = /[^0-9aeiou]/ig;

console.log(miceStr.match(miceRegex));
console.log(miceStr.match(miceRegex1));






// 14
// + is used to match when same word is occuring consectively 
console.log("14. Match Character that occur one more time");

let diffString = "Mississippsi";
let diffRegex = /s+/ig;
console.log(diffString.match(diffRegex));




// 15
// * returnig multiple match 
// more advance of +
console.log("15. Match character that occurs zero or more time ");

let soccerStr = "gooooooooolll!";
let feelStr = "gut feeling is gut go ggg feel";
let moonStr = "Over the moon, on the moon";

let sfmRegex = /go*/ig;

console.log(soccerStr.match(sfmRegex));
console.log(feelStr.match(sfmRegex));
console.log(moonStr.match(sfmRegex));




// 16
console.log("16. Exploring more ");

let chewStr = 'Aaaaaaaaaaaaaarrrrgh!';
let chewRegex = /Aa*/;
console.log(chewStr.match(chewRegex));




// 17.
// ? - 
console.log('17. find character with lazy matching ');

let titStr = "titanic";

let titRegex = /t[a-z]*i/ig;
let titRegex1 = /t[a-z]*?i/ig;

console.log(titStr.match(titRegex));
console.log(titStr.match(titRegex1));




// 18.
// . means any character are allowed 
// . wildcard character 
console.log("18.More on lazy matching ");

let winStr  = "<h1> Winter is coming <... </h1>";

let winRegex = /<.*>/;
let winRegexQues = /<.*?>/;

let winRegex1 = /<>/;
let winRegex2 = /<.>/;
let winRegex3 = /.*/;

console.log(winStr.match(winRegex));
console.log(winStr.match(winRegexQues));

console.log(winStr.match(winRegex1));
console.log(winStr.match(winRegex2));
console.log(winStr.match(winRegex3));



// 19.








