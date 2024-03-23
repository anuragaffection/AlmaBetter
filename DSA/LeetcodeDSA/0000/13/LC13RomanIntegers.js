

{
    /**
     * @param {string} s
     * @return {number}
    */

    // is this solution is handling the invalid input like vvvvvv in roman 
    // no this solution is not handling invalid input like cccccc in roman 
    var romanToInt = function (s) {
        const sym = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        let result = 0;

        for (let i = 0; i < s.length; i++) {
            const cur = sym[s[i]];
            const next = sym[s[i + 1]];

            if (cur < next) {
                result += next - cur;
                i++;
            } else {
                result += cur;
            }
        }

        return result;
    };

}





{
    // another solution 
    // almaBetter question number 56 

    // Do not remove nor make any changes in  main() function
    function main() {
        var s = readLine();
        console.log(romanToInt(s));
    }
    function romanToInt(s) {
        let obj = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        let sum = 0;
        let count = 1;

        for (let i = 0; i < s.length; i++) {

            if (obj[s[i]] < obj[s[i + 1]] && i < s.length - 1) {
                sum -= obj[s[i]];
            }
            else {
                sum += obj[s[i]];
                if (obj[s[i]] === obj[s[i + 1]] && i < s.length - 1) {
                    count++;
                }
                else {
                    count = 1;
                }
            }

            if (count > 3) {
                return "undefined"
            }
        }

        return sum;

    }
}
