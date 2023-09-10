// 3. Longest Substring Without Repeating Characters

//  also in module 2, chapter 01, Advance coding 





// way 01 - brute force 
{


    /**
     * @param {string} s
     * @return {number}
    */

    var lengthOfLongestSubstring = function (s) {

        let longest = 0;

        for (let i = 0; i < s.length; i++) {

            let store = "";

            for (let j = i; j < s.length; j++) {

                if (store.includes(s[j])) {
                    break;
                }
                store += s[j];
            }

            if (store.length > longest) {
                longest = store.length;
            }
        }

        return longest;

    };

}





// way 02

{
    /**
 * @param {string} s
 * @return {number}
*/

    var lengthOfLongestSubstring = function (s) {
        let longest = 0;
        let store = {};
        let start = 0;
        let end = 0;

        while (end < s.length) {
            if (store[s[end]] !== undefined && store[s[end]] >= start) {
                start = store[s[end]] + 1;
            }

            store[s[end]] = end;
            longest = Math.max(longest, end - start + 1);
            end++;
        }

        return longest;
    };

}




{
    // failing the condition, when s = " ";

    /**
     * @param {string} s
     * @return {number}
    */

    var lengthOfLongestSubstring = function (s) {

        let start = 0;

        let longest = 0;

        let map = new Map();


        for (let end = 0; end < s.length; end++) {

            if (map.has(s[end])) {

                let range = (end - start);

                if (range > longest) {
                    longest = range;
                }

                start = Math.max(start, map.get(s[end]) + 1);

                map.set(s[end], end);
            }

            map.set(s[end], end);
        }

        return longest;

    };

}



