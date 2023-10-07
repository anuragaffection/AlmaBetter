


{
    /**
     * @param {string} command
     * @return {string}
    */



    var interpret = function (command) {

        let res = '';

        for (let i = 0; i < command.length; i++) {

            if (command[i] === 'G') {
                res = res + 'G';

            }
            else if (command[i] === '(' && command[i + 1] === ')') {
                res = res + 'o';
                i++;

            }
            else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
                res = res + 'al';
                i = i + 3;
            }
        }


        return res;
    };
}













{
    /**
     * @param {string} command
     * @return {string}
    */


    var interpret = function (command) {

        return command.split('()').join('o').split('(al)').join('al');
    };


}














{

    /**
     * @param {string} command
     * @return {string}
    */

    var interpret = function (command) {

        return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
    };
}






