


{
    /**
     * @param {string[]} sentences
     * @return {number}
    */

    var mostWordsFound = function (sentences) {

        let largestLength = 0;

        for (let i = 0; i < sentences.length; i++) {

            let length = sentences[i].split(" ").length;

            if (length > largestLength) {
                largestLength = length;
            }

        }

        return largestLength;

    };
}