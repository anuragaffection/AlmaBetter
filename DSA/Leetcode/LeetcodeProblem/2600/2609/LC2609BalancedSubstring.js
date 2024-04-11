


{
    // way 01 
    // Brute force 

    // tc = O (n^3)
    // sc = linear 


    /**
     * @param {string} s
     * @return {number}
    */


    var findTheLongestBalancedSubstring = function (s) {

        let longest = 0;

        for (let i = 0; i < s.length; i++) {

            let subStr = "";

            for (let j = i; j < s.length; j++) {

                subStr += s[j];

                if (isBalance(subStr) && longest < subStr.length) {
                    longest = subStr.length;
                }

            }
        }

        return longest;

    };

    function isBalance(subStr) {

        let bool = true;

        if (subStr.length % 2 !== 0) {
            return false;

        }

        for (let i = 0; i < Math.floor(subStr.length / 2); i++) {

            if ((subStr[i] === subStr[subStr.length - 1 - i]) || (subStr[i] === "1")) {
                bool = false;
            }

        }
        return bool;
    }
}





{
    //
    // way 02
    // using regular expressions 
    // 

    // tc = O (n^2)
    // sc = constant 

    // .match() takes linear time complexity 
    // $ used to match the last of string 


    'use strict';

    /**
     * @param {string} s
     * @return {number}
     */

    const findTheLongestBalancedSubstring = function (s) {

        for (let i = Math.floor(s.length / 2); i > 0; i--) {

            if (s.match(`0{${i}}1{${i}}`)) {
                return 2 * i;
            }
        }

        return 0;
    };
}