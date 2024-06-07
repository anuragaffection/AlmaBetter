// Worst Case
function worstfindRelativeRanks(score) {
    const n = score.length;
    const ranks = new Array(n);
    const sortedScores = [...score].sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        const index = score.indexOf(sortedScores[i]);
        if (i === 0) {
            ranks[index] = "Gold Medal";
        } else if (i === 1) {
            ranks[index] = "Silver Medal";
        } else if (i === 2) {
            ranks[index] = "Bronze Medal";
        } else {
            ranks[index] = String(i + 1);
        }
    }
    return ranks;
}


// Best Case
function bestfindRelativeRanks(score) {
    const n = score.length;
    const ranks = new Array(n).fill("");
    let sortedScore = [...score].sort((a, b) => b - a)
    const top3 = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = 0; i < n; i++) {
        let index = score.indexOf(sortedScore[i]);
        ranks[index] = i < 3 ? top3[i] : String(i + 1);
    }
    return ranks;
}


const res1 = [5, 4, 3, 2, 1];
const res1Copy = [5, 4, 3, 2, 1];
console.log(worstfindRelativeRanks(res1));
console.log(bestfindRelativeRanks(res1Copy));
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]

const res2 = [10, 3, 8, 9, 4];
const res2Copy = [10, 3, 8, 9, 4];
console.log(worstfindRelativeRanks(res2));
console.log(bestfindRelativeRanks(res2Copy));
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]


/**
 *  -- 10, 3, 8, 9, 4 = score 
 *  -- 10, 9, 8, 4, 3 = score sorted in descending 
 * 
 *  -- 10,  3,  8,  9,  4 = score 
 *  -- gm, 5th, bm, sm, 4th = ranks = output 
 * 
 *  -- [...] rest or spread operator, creating a shallow copy 
 *  -- .sort() method in javascript directly modify the orignal array 
 */