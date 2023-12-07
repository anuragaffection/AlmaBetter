







{

    // my wrong solution 
    

    /**
     * @param {string} s
     * @return {number}
    */


    var longestPalindromeSubseq = function (s) {

        let longest = 0;

        for (let i = 0; i < s.length; i++) {

            let check = "";

            for (let j = i; j < s.length; j++) {
                check += s[j];

                if (isPalindromic(check)) {

                    if (check.length > longest) {
                        longest = check.length;
                    }

                }
                else {
                    check = check.slice(0, j)
                }

            }
        }

        return longest;

    };

    function isPalindromic(check) {

        if (check.length === 1) {
            return true;
        }

        for (let i = 0; i < Math.floor(check.length / 2); i++) {

            if (check[i] !== check[check.length - 1 - i]) {
                return false;
            }
        }

        return true;

    }

}