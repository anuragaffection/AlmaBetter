

{
   /**
    * @param {string} s
    * @param {number[]} indices
    * @return {string}
   */

    var restoreString = function (s, indices) {

        var len = indices.length;
        var str = new Array(len);

        for (let i = 0; i < len; i++) {
            str[indices[i]] = s[i];
        }
        return str.join("");
    };
}




