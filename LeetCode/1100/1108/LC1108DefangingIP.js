


{
    // way 01 

    /**
     * @param {string} address
     * @return {string}
    */


    var defangIPaddr = function (address) {

        return address.replaceAll('.', '[.]');

    };


}









{
    // way 02 

    var defangIPaddr = function (address) {

        return address.split('.').join('[.]');

    };

}








{
    // way 03 

    // using regex 

    var defangIPaddr = function (address) {

        return address.replace(/\./g, '[.]');

    };

    
}