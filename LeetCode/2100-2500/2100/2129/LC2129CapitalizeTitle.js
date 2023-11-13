



{
    /**
     * @param {string} title
     * @return {string}
    */


    // toLowerCase = linear 
    // split = linear 


    var capitalizeTitle = function (title) {

        let lower = title.toLowerCase();

        let lowerArr = lower.split(" ");

        for (let i = 0; i < lowerArr.length; i++) {

            if (lowerArr[i].length > 2) {

                let singleStr = lowerArr[i];

                let sliced = singleStr.slice(0, 1);

                let slicedUp = sliced.toUpperCase();

                let final = slicedUp.concat(singleStr.slice(1, singleStr.length));

                lowerArr[i] = final;
            }
        }

        return lowerArr.join(" ");

    };
}




{
    // same solution as above 
    
    /**
     * @param {string} title
     * @return {string}
    */


    var capitalizeTitle = function (title) {

        let lower = title.toLowerCase().split(" ");

        for (let i = 0; i < lower.length; i++) {


            if (lower[i].length > 2) {

                let word = lower[i];

                let firstLetter = word.slice(0, 1).toUpperCase();
                let remainingLetter = word.slice(1);

                lower[i] = firstLetter.concat(remainingLetter);

            }
        }

        return lower.join(" ");

    };
}