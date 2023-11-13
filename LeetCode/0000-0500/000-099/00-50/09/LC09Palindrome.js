/**
 * @param {number} x
 * @return {boolean}
*/



var isPalindrome = function (y) {

    let x = y.toString();

    for (let i = 0; i <= Math.floor(x.length / 2); i++) {

        if (x[i] != x[x.length - 1 - i]) {
            return false;
        }
    }

    return true;

};