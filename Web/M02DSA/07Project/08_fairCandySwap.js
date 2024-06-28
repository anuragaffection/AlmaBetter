module.exports = { fairCandySwap, fairCandySwap2};


var fairCandySwap = function (aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }
    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
    }

    let sum = (sumAlice + sumBob) / 2;
    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        let b = sum - (sumAlice - a);
        if (bobSizes.includes(b)) {
            return [a, b];
        }
    }
};


var fairCandySwap2 = function (aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }

    let mapBob = new Map();
    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
        mapBob.set(bobSizes[i], true);
    }

    let sum = (sumAlice + sumBob) / 2;
    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        let b = sum - (sumAlice - a);
        if (mapBob.has(b)) {
            return [a, b]
        }
    }
};


const aliceSizes1 = [1, 1], bobSizes1 = [2, 2]
console.log(fairCandySwap(aliceSizes1, bobSizes1)) //  [1, 2]
console.log(fairCandySwap2(aliceSizes1, bobSizes1))

const aliceSizes2 = [1, 2], bobSizes2 = [2, 3]
console.log(fairCandySwap(aliceSizes2, bobSizes2));  // [1, 2]
console.log(fairCandySwap2(aliceSizes2, bobSizes2));

const aliceSizes3 = [4, 6], bobSizes3 = [10, 8]
console.log(fairCandySwap(aliceSizes3, bobSizes3));  // [4,8]
console.log(fairCandySwap2(aliceSizes3, bobSizes3));


/**
 * solution 01 
 * -- Time complexity = O(n*n)
 * -- Space complexity = O(1)
 * 
 * solution 02 
 * -- Time Complexity  = O(n)
 * -- space complexity = O(n)
 * 
*/