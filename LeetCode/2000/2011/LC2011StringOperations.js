

{
    /**
     * @param {string[]} operations
     * @return {number}
    */

    var finalValueAfterOperations = function (operations) {

        let X = 0;

        for (let i = 0; i < operations.length; i++) {

            if (operations[i] === '++X') {
                ++X;
            }
            else if (operations[i] === 'X++') {
                X++;
            }
            else if (operations[i] === '--X') {
                --X;
            }
            else {
                X--;
            }

        }

        return X;

    };
}












{
    /**
     * @param {string[]} operations
     * @return {number}
    */

    var finalValueAfterOperations = function (operations) {

        let X = 0;

        for (let i = 0; i < operations.length; i++) {

            if (operations[i] === '++X' || operations[i] === 'X++') {
                X++;
            }
            else {
                X--;
            }

        }

        return X;

    };
}