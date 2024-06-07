module.exports = { sortPeople };

/*
function sortPeople(names, heights) {
    let length = heights.length();
    let map = new Map();
    for(let i=0; i<=length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
*/

var sortPeople = function (names, heights) {
    if (names.length !== heights.length) {
        return "Length should be same";
    }

    let length = heights.length;
    let map = new Map();
    for (let i = 0; i < length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    let res = [];
    for (let height of heights) {
        res.push(map.get(height));
    }
    return res;
};


const names1 = ["Mary", "John", "Emma"];
const heights1 = [180, 165, 170];
console.log(sortPeople(names1, heights1));  // : ["Mary","Emma","John"]

const names2 = ["Alice", "Bob", "Jobs"];
const heights2 = [155, 185, 150];
console.log(sortPeople(names2, heights2));  //  ["Bob","Alice","Jobs"]


