


{
    /**
     * this is one of the best & easy solutions 
     * 
    */


    /**
     * @param {string} colors
     * @return {boolean}
    */


    var winnerOfGame = function (colors) {

        let a = 0, b = 0;

        for (let i = 1; i < colors.length - 1; i++) {

            if (colors[i - 1] == 'A' && colors[i] == 'A' && colors[i + 1] == 'A') {
                a++;
            }

            if (colors[i - 1] == 'B' && colors[i] == 'B' && colors[i + 1] == 'B') {
                b++;
            }

        }

        if (a > b) return true;

        return false;

    };

}










{

    /**
     * THIS SOLUTION IS GOOD, BUT STILL NOT PASSING THE ALL TEST CASES, 
     * 
     * CHECK AGAIN, MAY BE TIME LIMIT FOR LONGER COLORS VALUE 
     * 
    */


    /**
     * @param {string} colors
     * @return {boolean}
    */


    var winnerOfGame = function (colors) {

        let chance = 'A'; // Alice starts

        let strArr = colors.split('');



        while (true) {

            let moved = false; // Flag to track if a valid move was made

            if (chance === 'A') {

                for (let i = 1; i < strArr.length - 1; i++) {

                    if (strArr[i] === 'A' && strArr[i - 1] === 'A' && strArr[i + 1] === 'A') {
                        strArr.splice(i, 1);
                        chance = 'B';
                        moved = true;
                        break;
                    }
                }

            }
            else {

                for (let i = 1; i < strArr.length - 1; i++) {
                    if (strArr[i] === 'B' && strArr[i - 1] === 'B' && strArr[i + 1] === 'B') {
                        strArr.splice(i, 1);
                        chance = 'A';
                        moved = true;
                        break;
                    }
                }
            }

            if (!moved) {
                // If no valid move can be made, the current player loses
                return chance === 'A' ? false : true;
            }

            if (strArr.length <= 2) {
                // If there are only 2 or fewer pieces left, the game ends
                return chance === 'A' ? false : true;
            }
        }
    };
}


















{
    /**
     *  analyse this solution 
    */


    /**
     * @param {string} colors
     * @return {boolean}
    */


    var winnerOfGame = function (colors) {

        let countA = 0;
        let countB = 0;


        for (let i = 0; i < colors.length; i++) {

            const x = colors[i];
            let count = 0;


            while (i < colors.length && colors[i] === x) {
                i++;
                count++;
            }

            if (x === 'A') {
                countA += Math.max(count - 2, 0);

            } else if (x === 'B') {
                countB += Math.max(count - 2, 0);
            }

            i--;
        }

        return countA > countB;
    };
}