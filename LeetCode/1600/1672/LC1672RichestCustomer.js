


{

    /**
     * @param {number[][]} accounts
     * @return {number}
    */


    var maximumWealth = function (accounts) {

        let richest = 0;

        for (let i = 0; i < accounts.length; i++) {

            let count = 0;

            for (let j = 0; j < accounts[0].length; j++) {
                count += accounts[i][j];
            }

            if (count > richest) {
                richest = count;
            }
        }

        return richest;
    };


}