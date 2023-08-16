


{

    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
    */


    var canConstruct = function (ransomNote, magazine) {

        const arr = magazine.split("");

        for (let i = 0; i < ransomNote.length; i++) {

            let index = arr.indexOf(ransomNote[i]);

            if (index === -1) {
                return false;
            }
            else {
                arr.splice(index, 1);
            }
        }

        return true;
    };

}





{

    // this is wrong solution 

    // pop is used to delete from last of an array 

    // if you have to delete from any position in an arry == use .splice()
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
    */


    var canConstruct = function (ransomNote, magazine) {

        magazine.split("");

        for (let i = 0; i < ransomNote; i++) {

            if (magazine.includes(ransomNote[i])) {
                /// here it is wrong 
                // we are deleting the last 
                magazine.pop(ransomNote[i]);
            }
            else {
                return false;
            }
        }

        return true;

    };
}