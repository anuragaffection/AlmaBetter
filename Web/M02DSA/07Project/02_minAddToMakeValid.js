module.exports = { minAddToMakeValid };

/*
function minAddToMakeValid(s) {
    let open = 0, close = 0;
    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open--;
    }
    return open + close;
};
*/

var minAddToMakeValid = function (s) {
    if (s.length === 0) {
        return false;
    }
    let open = 0, close = 0;
    for (let c of s) {
        if (c === '(') {
            open++;
        }
        else if (c === ')') {
            if (open) {
                open--;
            } else {
                close++;
            }
        }
    }
    return open + close;
};




const s1 = "(()";
console.log(minAddToMakeValid(s1)); // 1

const s2 = "())";
console.log(minAddToMakeValid(s2)); // 1

const s3 = "()))((";
console.log(minAddToMakeValid(s3)); // 4

const s4 = "(((()";
console.log(minAddToMakeValid(s4)); // 3

const s5 = "";
console.log(minAddToMakeValid(s5)); // false





