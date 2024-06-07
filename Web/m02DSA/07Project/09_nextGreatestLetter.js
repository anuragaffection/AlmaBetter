module.exports = { nextGreatestLetter, nextGreatestLetter2 };

function nextGreatestLetter(letters, target) {
    // binary search
    let ans;
    let check = false;

    let size = letters.length;
    let l = 0;
    let h = size - 1;

    while (l <= h) {
        let mid = h - Math.floor((h - l) / 2);
        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            let currAns = letters[mid];
            check = true;
            if (mid >= 0) {
                h = mid - 1;
            }
            ans = currAns;
        }
    }

    if (!check) {
        return letters[0];
    }
    return ans;
}


function nextGreatestLetter2(letters, target) {
    let ans;
    let seenLetters = new Set();
    
    let size = letters.length;
    let l = 0;
    let h = size - 1;

    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2);
        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            ans = letters[mid];
            h = mid - 1;
            seenLetters.add(ans);
        }
    }

    if (seenLetters.size === 0) {
        return letters[0];
    }
    return ans;
}


const letters1 = ["c", "f", "j"];
const target1 = "a";
console.log(nextGreatestLetter(letters1, target1)); //  c
console.log(nextGreatestLetter2(letters1, target1)); //  c

const letters2 = ["c", "f", "j"];
const target2 = "c";
console.log(nextGreatestLetter(letters2, target2)); // f
console.log(nextGreatestLetter2(letters2, target2)); // f

const letters3 = ["x", "x", "y", "y"];
const target3 = "z";
console.log(nextGreatestLetter(letters3, target3)); // x
console.log(nextGreatestLetter2(letters3, target3)); // x

const letters4 = ["a", "b", "c", "d", "e"];
const target4 = "b";
console.log(nextGreatestLetter(letters4, target4)); // c
console.log(nextGreatestLetter2(letters4, target4)); // c

