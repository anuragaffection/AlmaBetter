/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
*/

var numJewelsInStones = function (jewels, stones) {

    let count = 0;

    for (let i = 0; i < stones.length; i++) {

        if (jewels.includes(stones[i])) {
            count++;
        }
    }

    return count;

    // thank you
    // all the very best 

};




{
    /**
     * @param {string} J
     * @param {string} S
     * @return {number}
    */


    var numJewelsInStones = function (Jewels, Stones) {

        // optimised code 

        let object = {};
        let count = 0;

        for (let i = 0; i < Jewels.length; i++) {
            object[Jewels[i]] = true;
        }


        for (let i = 0; i < Stones.length; i++) {
            if (object[(Stones[i])]) {
                count++;
            }
        }
        // accessing throught bracket notations is always correct
        // some times accessing through dot natations fails

        return count;

        // thank you
        // all the very best


    };
}