/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1;

    // do analysis of this line 
    return haystack.split(`${needle}`)[0].length;
};