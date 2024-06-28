

// example 01 to 39 --- are from FreeCodeCamp.org



// 01.
// regex creation
//It define a search pattern that can be used to search for things in a string.

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

let fccRegex = /freecodecamp/;
let fccRegex1 = /freecodecamp/i;

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

let humStr = "I'll sing hum Hum Hummmes song";
let hugStr = "Bear hug , Dear Hug, Hugges ";

let huRegex = /hu./ig;

let humResult = humStr.match(huRegex); // hum, hum , hum --- point to not (Hummmes)
let hugResult = hugStr.match(huRegex);  // hug, hug, hug --- point to not ( Hugges )

console.log(humResult);
console.log(hugResult);




// 09.
// . --- any charcter at the place of dot 
console.log('09. Exploring dot or period ');

let exampleStr = "Let's have fun & run with regular expressions ssun.";

let exampleRegex = /.un/; // fun
let exampleRegex1 = /.un/g; // fun, run, sun - point to note - actual word was ssun but it will find sun from it


let exampleResult = exampleStr.match(exampleRegex);
let exampleResult1 = exampleStr.match(exampleRegex1);

console.log(exampleResult);
console.log(exampleResult1);






// 10
// any character [] - from big bracket;
console.log("10. Match single character with multiple possibilities");

let quotStr = "Beware of bugs in the above code; I have only proved it correctly";

let vowelRegex = /[aeiou]/ig; // important note - if there are not character it will match single character form [] - square bracket 

let bgRegex = /b[aiu]g/;

console.log(quotStr.match(vowelRegex));
console.log(quotStr.match(bgRegex));








// 11.
// range of letters 
// instead of writing all charater in [] - square bracket - we can make them short 
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
// ^ - carate is used to - negate 
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
let diffRegex = /s+/ig;  // important to note 
console.log(diffString.match(diffRegex));




// 15
// * returnig multiple match 
// more advance of +
console.log("15. Match character that occurs zero or more time ");

let soccerStr = "gooooooooolll!";
let feelStr = "gut feeling is gut go ggg feel";
let moonStr = "Over the moon, on the moon";

let sfmRegex = /go*/ig;
let sfmRegex1 = /g*/ig; // imprtant note // differentiate between + vs *

let sfmRegex2 = /g+/ig;

console.log("soccer = ", soccerStr.match(sfmRegex));
console.log("feel = ", feelStr.match(sfmRegex));
console.log("moon = ", moonStr.match(sfmRegex));

console.log("soccer = ", soccerStr.match(sfmRegex1));
console.log("feels = ", feelStr.match(sfmRegex1));
console.log("moon = ", moonStr.match(sfmRegex1));

console.log("soccer = ", soccerStr.match(sfmRegex2));
console.log("feels = ", feelStr.match(sfmRegex2));
console.log("moon = ", moonStr.match(sfmRegex2));





// 16
console.log("16. Exploring more ");

let chewStr = 'Aaaaaaaaaaaaaarrrrgh!';
let chewRegex = /Aa*/;
console.log(chewStr.match(chewRegex));




// 17.
// ? - 
console.log('17. find character with lazy matching ');

let titStr = "titanic";

let titRegex = /t[a-z]*i/ig;  // important note - how it is working 
let titRegex1 = /t[a-z]*?i/ig;  // ti , tani

console.log(titStr.match(titRegex));
console.log(titStr.match(titRegex1));




// 18.
// . means any character are allowed 
// . wildcard character 
console.log("18.More on lazy matching ");

let winStr = "<h1> Winter is coming <... </h1>";

let winRegex = /<.*>/;
let winRegexQues = /<.*?>/; // imp 

let winRegex1 = /<>/; // finding exact match
let winRegex2 = /<.>/; // finding any single character between <>
let winRegex3 = /.*/; // finding any single character with repeating it multiple times

console.log(winStr.match(winRegex));
console.log(winStr.match(winRegexQues));

console.log(winStr.match(winRegex1));
console.log(winStr.match(winRegex2));
console.log(winStr.match(winRegex3));





// 19.
console.log("19. find one more criminals in a hunt");

let crowdStr = "p1p2p3p4p5p6cccpccp78pg";

let crimeRegEx = /c+/;
let crimeRegExG = /c+/g;

console.log(crowdStr.match(crimeRegEx));
console.log(crowdStr.match(crimeRegExG));





// 20.
// ^ - carate is - used to negate 
// ^ - carate is - also used to match First character in string 
console.log("20. find beginning string patterns");

let rickyStr = "Cal and Ricky both like racing.";
let rickyStr1 = "Ricky and cal both like racing ";

let rickyRegex = /^Ricky/;

console.log("Ricky's regex", rickyStr.match(rickyRegex)); // null - why -- here negate is not negating the character -- it is findnig the first match
console.log("Ricky match ", rickyStr1.match(rickyRegex)); // ricky








// 21.
// $ - dollar - is used to match ending characters in string 
console.log("21. Match ending string patterns");

let boseStr = "The last car on a train is the bose";
let boseStr1 = "The last car on a train is the Bose and Bose";

let boseRegex = /bose$/;
let boseRegex1 = /bose$/ig;

console.log("last match = ", boseStr.match(boseRegex)); // bose
console.log("last match = ", boseStr.match(boseRegex1)); // bose

console.log("last match = ", boseStr1.match(boseRegex)); // bose
console.log("last match1 = ", boseStr1.match(boseRegex1)); // bose






// 22.

// w - is short from of --- [ a-zA-Z0-9_ ]
// \w - is used to match any character, any digit and underscore

// \W - capital W - will negate the - \w (small w);
console.log("22. Match all letters and numbers - shorthand");

let sampleStr = "The five boxing wizards $ jump quickly";

let sampleRegex = /[a-zA-Z0-9_]/ig;
let sampleRegex1 = /\w/ig;

let sampleRegexW = /\W/ig;

console.log("small w = ", sampleStr.match(sampleRegex));
console.log("small w = ", sampleStr.match(sampleRegex1));

console.log("Captial W = ", sampleStr.match(sampleRegexW));
console.log("capital W matching total length = ", sampleStr.match(sampleRegexW).length);





// 23.

// d - match all numbers
// D - match non numbers 

console.log("23. Match all numbers");
let numStr = "Your sandwhich will be $5.00 & you will get code as $987643210";

let numRegex = /[0-9]/g;
let numRegex1 = /\d/g;
let numRegex2 = /\D/g;

console.log("number match = ", numStr.match(numRegex));
console.log("number match d = ", numStr.match(numRegex1));
console.log("number match D =  ", numStr.match(numRegex2));

console.log("number match - length = ", numStr.match(numRegex).length);
console.log("number match d - length = ", numStr.match(numRegex1).length);
console.log("number match D - length = ", numStr.match(numRegex2).length);





// 24.
/* 
  username rules - 
 
  1. if there are numbers, they must be at the end
  2. letters can be lowercase and uppercase
  3. At least two characters in username 
  4. two letters can not have numbers 
 
*/

/*
  ^ - here will be used to match first word 
  { , } - number of times, {starting, ending}
  $ - here wlll be used to match last 
 
*/

console.log("24. Restrict possible usernames");

let userRegex = /^[a-zA-Z]{2,}\d*$/;

let username = "AnuragAffection7777";
let username1 = "anuragAffection";

if (userRegex.test(username)) console.log(`Username ${username} is valid`);
if (userRegex.test(username1)) console.log(`Username ${username1} is valid`);





// 25. 
// s - match white space
// S - match non white space 

console.log("25. Match whitespace characters");

let whiteStr = "Whitespace is important in separting words";

let whiteRegex = /\s/g; // all white spaces 

let whiteRegexS = /\S/; // W - first non white spaces
let whiteRegexS1 = /\S/g; // all non white spaces 


console.log("white space = ", whiteStr.match(whiteRegex));
console.log("Non white space  = ", whiteStr.match(whiteRegexS));
console.log("Non white space = ", whiteStr.match(whiteRegexS1));





// 26.
console.log("26. Specify upper and Lower number of matches ");

let ohStr = "Ohhh no";

let ohRegex = /Oh{3,6} no/;
let ohRegex1 = /Oh{3,} no/;

console.log(ohStr.match(ohRegex));
console.log(ohStr.match(ohRegex1));





// 27.
console.log("27. Specify only the lower number of matches ");
let haStr = "Hazzzzaahh";
let haRegex = /z{4,}/;
console.log(haStr.match(haRegex));





//28.
console.log('S28. pecify exact number of matches ');
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
console.log(timStr.match(timRegex));





// 29.
// u? - this will mark "u" may be or not 
// recall - ? - can be used for both lazy matching & _______
console.log("29. check for all or none");

let favStr = "Favorite";
let favStr1 = "Favourite";

let favRegex = /favou?rite/i;

console.log(favStr.match(favRegex));  // true - favorite
console.log(favStr1.match(favRegex)); // true - favourite





// 30.
// ? = 
// ? !
console.log(`30. Postitve and Negative LookAhead`);

let quStr = "qu";
let qtStr = "qt";


let quRegex = /q(?=u)/; // positive lookahead
let quRegex1 = /q(?!u)/; // negative lookahead

console.log(quStr.match(quRegex)); // q
console.log(quStr.match(quRegex1)); // null

console.log(qtStr.match(quRegex)); // null
console.log(qtStr.match(quRegex1)); // q







// 31.
// problem - check again 

// (?=\w{5}) - positive lookahead + any words with five character 
// (?=\D*\d{2}) - positive lookahead + any character without digit + repeating zero or more times + then a number of two digtits 

console.log('31. more example on lookahead');

let astroStr = "astronaut12";
let astRegex = /(?=\w{5,})(?=\D*\d{2,})/;
console.log(astroStr.match(astRegex));






// 32.
//  /(\w+)\s\1/ --- here 1 is repeating the capture group one more times 
//  (\w+)       --- are called as capture group

console.log("32. Reuse patterns using capture groups");

let repeatStr = "regex regex";

// so, here both the regex , repeatRgx & repeatRgx1 = are acting like same for main value but have slightly difference in giving extra value .
let repeatRgx = /(\w+)\s\1/;
let repeatRgx1 = /(\w+)\s(\w+)/;

console.log(repeatRgx.test(repeatStr)); // true
console.log(repeatStr.match(repeatRgx)); // [regex regex], [regex]

console.log(repeatRgx1.test(repeatStr)); // true
console.log(repeatStr.match(repeatRgx1)); // [regex regex], [regex], [regex]





// 33.
console.log("33. Reuse patterns using capture groups");

let repeatStr33 = "regex regex";
let repeatRgx33 = / (\w+)\s\1 /;

console.log(repeatRgx33.test(repeatStr33)); // false - due to space in regex33
console.log(repeatStr33.match(repeatRgx33)); // null - due to spaces in regex33





// 34.
console.log("34. Matching using patterns");

let numString = '42 42 42 42 42 42';

// explanation = first any number + space + any number + space + any Number
let numRgx = /(\d+)\s\1\s\1/;
let numRgx1 = /(\d+)\s(\d+)\s(\d+)/;

console.log(numString.match(numRgx)); // [42 42 42],  [42]
console.log(numRgx.test(numString));  // true 

console.log(numString.match(numRgx1)); // [42 42 42],  [42], [42], [42]
console.log(numRgx1.test(numString)); // true 





// 35.
console.log("35. exploring more");

let num35String = "35 35 35 35 35";
let num35Str = "35 35 35";

let num35Regex = /^(\d+)\s\1\s\1$/;

console.log(num35String.match(num35Regex)); // null
console.log(num35Str.match(num35Regex)); // [35 35 35], [35];






// 36.
// replace( , ) --- is used to replace 
console.log("36. Use Capture Groups to Search and Replace ");

let wrongStr = "The sky is silver.";

let silverRgx = /silver/;
let blueRgx = /blue/;

let correctStr = wrongStr.replace(silverRgx, blueRgx);
console.log(correctStr);





// 37.
console.log("37. Replacing using regex ");

let codeCampStr = "free code";
let codeCampRgx = /(\w+)\s(\w+)/;

let codeCampReplace = codeCampStr.replace(codeCampRgx, "$2 $1");
console.log(codeCampReplace); // code free 






// 38
console.log("38. ");

let sandStr = "This sandwich is good.";

let goodRgx = /good/;
let okayRgx = "okey - dokey";

let sandStrReplace = sandStr.replace(goodRgx, okayRgx);
console.log(sandStrReplace);






// 39

//  s    ---- white space
//  s+   ---- any number of white space
//  ^\s+ ---- beginning should from space
//   |   ---- or symbol
//  \s+$ ---- white space at last 

console.log("39. Replace whitespace from start and end ");

let helloString = "    Hello, World!  ";
let whiteRgx = /^\s+|\s+$/g;

let helloResult = helloString.replace(whiteRgx, "");
console.log(helloResult);






