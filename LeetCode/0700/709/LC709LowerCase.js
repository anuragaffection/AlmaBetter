

{
    // way 01
    // by using pre defined function 
    // .toLowerCase()

    /**
     * @param {string} s
     * @return {string}
    */

    var toLowerCase = function (s) {

        return s.toLowerCase();

    };


}


{
    // https://techpurush.com/ascii-table-a-to-z-standard-ascii-codes/
    // Ascii table 

    /**
     *  A - 65
     *  B - 66
     *  Z - 90
     * 
     *  a - 97
     *  b - 98
     *  z - 122
    */


    /**
     *  .charCodeAt()
     *  Strig.fromCharCode()
     */



    /**
      * @param {string} s
      * @return {string}
    */

    var toLowerCase = function (s) {

        let output = [];

        for (let i = 0; i < s.length; i++) {

            let ac = s[i].charCodeAt();

            if (ac >= 65 && ac <= 90) {
                ac = ac + 32;
            }

            output.push(String.fromCharCode(ac));
        }

        return output.join("");

    };
}




{
    /**
     * @param {string} s
     * @return {string}
    */

    var toLowerCase = function (s) {

        let output = s.split("");

        for (let i = 0; i < s.length; i++) {

            let ac = s[i].charCodeAt();

            if (ac >= 65 && ac <= 90) {
                ac = ac + 32;
                output[i] = String.fromCharCode(ac);
            }
        }

        return output.join("");

    };
}
