
/**
 *  01. pattern Matching vs String Matching 
 *  02. Example of matching email address 
 *  03. Example of matching custom email address 
 * 
 * 
*/


/**
 *  flags 
 * 
 *  i - ignore case
 *  g - global find 
 *    - multiline  
*/



{
  /**  recall 
   * 
   *  |  --- pipe is used as or 
   *  .  --- dot is used for any thing on dot places are acceptable
   *  [] --- any character from square bracket 
   *  ^  --- used to negate or find the first things in string 
   *  $  --- used to find at last of string 
   *  +  --- used to get all words with same character - that occur one or more time
   *  *  --- used to get words that occure - zero or more time
   *  ?  --- used to lazy matching - how it work
   *  () --- group class - used to match one or more acts as optional matching 
   *  {} --- used to specific repeating times 
  */
}




/* 
  01. 
  pattern matching vs string matching 

*/



{

  /*
    02. 
    example of email address pattern 

    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   
 
    ^                  -- for matching first of line
    [a-zA-Z0-9._%+-]   -- any character from this  like "anuragAffection07"
    +                  -- one or more times
    @                  -- followed by "@" symbol
    [a-zA-Z0-9.-]      -- domain name can have letters and numbers like "gmail"
    +                  -- one or more times
    \.                 -- to insert dot (.)
    [a-zA-Z]{2,}       -- top level domains like ".com"
    $                  -- end of line
 
 
  */

  console.log("Example of email address pattern  ");

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const email1 = "michael.scott@gmail.com";
  const email2 = "pam.beesly_gmail.com"; // there is no @ symbol here
  const email3 = "pam.beesly$^07rrrks@gmail.com" // $ ^ are not allowed here 
  const email4 = "pam.beesly.%+-rrrks@gmail.com"

  console.log(isValidEmail(email1)); //  true
  console.log(isValidEmail(email2)); //  false
  console.log(isValidEmail(email3)); //  false
  console.log(isValidEmail(email4)); //  true 

}




{
  // 03. email pattern 

  /*
    ^       -- beginning of line
    [^\s@]  -- negating the whitespace and @
    +       -- one or more times repeating
    @       -- matching @ symbol
    [^\s@]  -- everything is allowed except whitespace and @
    +       -- repeating one or more times
    \.      -- matching dot (.) character
    [^\s@]  -- everything is allowed except whitespace and @
    +       -- repeating one or more times 
    $       -- end of the line


  */
  console.log("04. example of custom email pattern - allowing everyting except @ and space");

  function isValidEmail44(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const email1 = "michael.scott@gmail.com";
  const email2 = "pam.beesly_gmail.com"; // there is no @ symbol here
  const email3 = "pam.beesly$^#!07rrrks@gmail.com";
  const email4 = "pam.beesly.%+-rrrks@gmail.com";
  const email5 = "pam.beesly.%rrrks@gmail%%rrks.com%%rrks";

  console.log(isValidEmail44(email1)); //  true
  console.log(isValidEmail44(email2)); //  false
  console.log(isValidEmail44(email3)); //  true
  console.log(isValidEmail44(email4)); //  true 
  console.log(isValidEmail44(email5)); //  true
}

