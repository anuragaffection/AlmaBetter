
/*

Regular Expressions 


01. Regular expressions 
  -- Regex Basics 
  -- how to create regex 
  -- character sets 
  -- ranges 
  -- character classes 
  -- groups 
02. Bracket expressions
03. Regex methods 
04. Assertions 
05. Regex flags 
06. Quantifiers 


*/


/**
 *  flags 
 * 
 *  i - ignore case
 *  g - global find 
 *    - multiline 
*/



/**
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




{
  {
    /*
      What is regex  ?
     
      What is metacharacters 
      -- metacharaters are short form of writing regex
     
     
    */
  }


  {
    /*
      
      How to create regex and flags 
   
      regular expressions in JavaScript start and end with / 
      creating Regex in JavaScript is by using RegExp() object. 
   
      By default, a regex pattern is case sensitive 
      By default, a regex pattern will only return the first match it finds
   
      flag - i - ignore case - will make regex case insensitive
      flag - g - global case - will find all matches 
      flag -   - multiline flag
   
   
    */
    console.log(" Basics of regex - Creating a regex ");

    let regex = /hello/;
    let regex1 = new RegExp("hello World ");

    console.log(regex);
    console.log(regex1);

  }



  {

    // charcter sets 
    // character sets, denoted with []
    // the charater within the [] bracket is called as character sets
    const matchregex = /[bcf]at/;
    const matchregex1 = new RegExp("[bcf]at");

    const matchregex2 = /[abcde]at/;

  }



  {

    // Ranges
    // ranges is donted by -
    // we can shorten the character within the character sets by using ranges 

    //  a-z   --- reprsents all small alpahbetical charaters from a to z
    //  A-Z   --- represents all capital letters form A to Z
    //  0-9   --- all digits from 0 to 9


    const matchregex = /[a-z]at/
    const matchregex1 = new RegExp("[a-z]at")

    // here we shorte regex using ranges 
    const matchregex2 = /[abcde]at/;
    const matchregex2Short = /[a-e]at/;


  }



  {
    /*
   
   
      character classes
   
      \d  ---  matches any digit that is the same as [0-9]
      \D  ---  Matches any character that is not a digit (Arabic numeral).equivalent to  [^0-9]
      \w  ---  matches any letter, digit and underscore character
      \W  ---  
      \s  ---  matches a whitespace character — that is, a space or tab
      \S  --- 
      \t  ---  matches a tab character only
   
   
   
      \w{5}  --  matches any five-letter word or a five-digit number
      \d{11} --  matches an 11-digit number such as a phone number
   
      \w{5,}    --  at least five 
      \w{5, 11} -- in between five & 11
   
    */

  }

  {

    /*
      Groups
   
      We can create groups by ()
   
      the pattern book(.com)? will match both “book” and “book.com”, 
      since we’ve made the “.com” part optional.
   
   
      regex -- @\w+\.\w{2,3}(\.\w{2,3})?
      
      @       -- start with @
      \w+     -- any letters or digit and underscore - one or more number of times 
      \.      -- matching special characters dot (.)
      \w{2,3} -- any letters or digit and underscore - in between 2 to 3 times
   
      (       -- starting of small bracket - group class - making optional
   
        \.       -- matching special charcters dot (.)
        \w{2,3}  -- any letters or digit and underscore - in  between or 2 to 3 times
   
      )       -- ending of optional 
   
      ?       -- lazy matching 
   
   
   
    */

    console.log("groups ");

    let regex = /@\w+\.\w{2,3}(\.\w{2,3})?/ig;

    let test1 = "abc.com";      //  false;
    let test2 = "abc@mail";     //  false 
    let test3 = "@mail.com";    //  true
    let test4 = "@mail.co.ke";  //  false 

    console.log(regex.test(test1));
    console.log(regex.test(test2));
    console.log(regex.test(test3));
    console.log(regex.test(test4));

  }


  {

    console.log(". groups more on group ");

    let regex = /@\w+\.\w{2,3}(\.\w{2,3})?/;

    let test1 = "abc.com";     // false;
    let test2 = "abc@mail";    // false 
    let test3 = "@mail.com";   // true
    let test4 = "@mail.co.ke"; // true

    console.log(regex.test(test1));
    console.log(regex.test(test2));
    console.log(regex.test(test3));
    console.log(regex.test(test4));

  }


}




{
  console.log("2. Bracket expressions ");
  /*
 
    combinations of bracket set and Range 
 
    [a-z]
    [A-Z]
    [0-9]
 
    [a-c]
    [abc]
 
    [abcde]
    [a-e]
 
    [a-gA-C0-7] 
 
  */
}


{
  // 03. Regex method 
}



{
  console.log("4. Asssertions");

  // what is assertions
  // type of assertions

  // assertions don't match any actual characters in the string you're searching.
  // Assertions include boundaries, which indicate the beginnings and endings of lines and words


  /*
 
    ^  --
    $  -- 
    \b --
    \B --
 
    ?=   -- positive assertions - lookahead
    ?<=  -- positive assertions - lookbehind
 
    ?!   -- negative assertions - lookahead
    ?<!  -- negative assertions - lookbehind
 
    |    -- pipe symbol - used as or - alternate 
 
 
 
  */

}



{
  console.log('5. flags');

  /*
    
    i - ignore case 
    g - global case 
 
  */

  {
    console.log("5. A - without flag ");

    const sentence = 'The Cat in the Hat is not a cat.'
    const regex = /[A-Z]/;

    const found = sentence.match(regex);
    console.log(found);
    // Expected Output: ['T']

  }

  {
    console.log("5.B - with flag  - g ");

    const sentence = 'The Cat in the Hat is not a cat.'
    const regex = /[A-Z]/g;

    const found = sentence.match(regex);
    console.log(found);
    // Expected Output: ['T', 'C', 'H']

  }


  {
    console.log("5.C - with flag i and g both at same time ");

    const sentence = 'The Cat in the Hat is not a cat.'
    const regex = /[A-Z]/ig;

    const found = sentence.match(regex);
    console.log(found); // matching all except spaces and (.)

    console.log(sentence.length); // 32
    console.log(found.length); // 23


  }



  {
    console.log('5.D - without flag m ');

    const sentence = 'The Cat in the Hat is not a cat.';
    const sentence1 = "the cat in the hat is not a CAT. ";

    const regex = /[A-Z]/;
    const regex1 = /[a-z]/;

    const found = sentence.match(regex);
    const found1 = sentence1.match(regex);

    const found2 = sentence.match(regex1);
    const found3 = sentence1.match(regex1);


    console.log(found);   // T at index 0
    console.log(found1);  // C at index 28


    console.log(found2);  // h at 1
    console.log(found3);  // t at 0

  }

  {
    console.log('5.E - with flag m');

    const sentence = 'The Cat in the Hat is not a cat.';
    const sentence1 = "the cat in the hat is not a CAT."

    const regex = /[A-Z]/m;
    const regex1 = /[a-z]/m;

    const found = sentence.match(regex); // T  -- first capital letters is T at index 0
    const found1 = sentence1.match(regex); // C -- first capital letters is C at index 28.

    const found2 = sentence.match(regex1); // h
    const found3 = sentence1.match(regex1); // t

    console.log(found);
    console.log(found1);

    console.log(found2);
    console.log(found3);


  }



  {
    console.log("5.F - exploring more - important ");

    const sentence = 'There are 350 dogs and 17 cats in the house.';

    const regex = /\w\s/;
    const regex1 = /\w\s/g;

    const found = sentence.match(regex);
    const found1 = sentence.match(regex1);

    console.log(found); // Expected Output: ['e ']
    console.log(found1); // e_  e_  0_  s_  d_  7_  s_  n_  e_


  }

}



{
  // 06. Quantifiers 
}






