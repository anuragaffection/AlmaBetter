
{
    // brute force 

    // tc = cubic  -  O (n ^ 3)
    // sc = linear 

    // cubic time complexity is terrible so we can optimised 
    // also we can optimised space complexity to constant
    
    // Manacher's algorithm, 
    // which can find the longest palindromic substring in - 
    // linear time complexity O(n).
    // also limitations of Manacher's algorithm


    /**
     * @param {string} 
     * @return {string}
    */

    var longestPalindrome = function (s) {
        let longest = 0;
        let longestStr = "";

        for (let i = 0; i < s.length; i++) {
            let subStr = "";

            for (let j = i; j < s.length; j++) {
                subStr += s[j];

                if (isPalindromic(subStr) && longest < subStr.length) {
                    longestStr = subStr;
                    longest = longestStr.length;
                }
            }
        }
        return longestStr;

    };

    function isPalindromic(subStr) {
        if (subStr.length === 1) {
            return true;
        }

        for (let i = 0; i < Math.floor(subStr.length / 2); i++) {
            if (subStr[i] !== subStr[subStr.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
}



{
    // this code is wrong 
    // all in isPalindromic check

    // do compare with previous one 

    /**
    * @param {string} s
    * @return {string}
    */


    var longestPalindrome = function (s) {
        let longest = 0;
        let longestStr = "";

        for (let i = 0; i < s.length; i++) {
            let subStr = "";

            for (let j = i; j < s.length; j++) {
                subStr += s[j];

                if (isPalindromic(subStr) && longest < subStr.length) {
                    longestStr = subStr;
                    longest = longestStr.length;
                }
            }
        }
        return longestStr;
    };

    // here our my code is wrong 
    // this is not checking palindromic correctly
    function isPalindromic(subStr) {
        let bool = false;

        if (subStr.length === 1) {
            return true;
        }

        for (let i = 0; i < Math.floor(subStr.length / 2); i++) {

            if (subStr[i] === subStr[subStr.length - i - 1]) {
                bool = true;
            }
        }
        return bool;
    }
}
