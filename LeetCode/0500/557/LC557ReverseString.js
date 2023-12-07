


{
    /**
     * @param {string} s
     * @return {string}
    */

    var reverseWords = function (s) {

        let arr = s.split(' ');

        for (let i = 0; i < arr.length; i++) {

            let reveresed = myReverse(arr[i]);

            arr[i] = reveresed;
        }


        return arr.join(' ');


    };


    function myReverse(word) {

        let str = word.split('');

        for (let i = 0; i < Math.floor(str.length / 2); i++) {

            let temp = str[i];

            str[i] = str[str.length - 1 - i];

            str[str.length - 1 - i] = temp;
        }

        return str.join('');
    }
}










{
    /**
     * @param {string} s
     * @return {string}
    */

    var reverseWords = function (s) {

        let arr = s.split(' ');

        for (let i = 0; i < arr.length; i++) {

            arr[i] = myReverse(arr[i]);


        }


        return arr.join(' ');


    };


    function myReverse(word) {

        let str = word.split('');

        for (let i = 0; i < Math.floor(str.length / 2); i++) {

            let temp = str[i];

            str[i] = str[str.length - 1 - i];

            str[str.length - 1 - i] = temp;
        }

        return str.join('');
    }
}










{
    /*
       reverse () = only applicable to array 
    */

    var reverseWords = function (s) {

        let arr = s.split(' ');

        for (let i = 0; i < arr.length; i++) {

            let word = arr[i].split('').reverse().join('');

            arr[i] = word;
        }


        return arr.join(' ');


    };

}









{
    /**
     * @param {string} s
     * @return {string}
    */

    var reverseWords = function (s) {
        let res = '';
        let word = '';
        for (let c of s) {
            if (c === ' ') {
                res += word + c;
                word = '';
            } else {
                word = c + word;
            }
        }
        return res + word;
    };
}