
{
    // first unique characters 
    {
        // way 01 
        var firstUniqChar = function(s) {
            for (let i = 0; i < s.length; i++) {
                let char = s[i];
                if (s.indexOf(char) === s.lastIndexOf(char)) {
                    return i;
                }
            }
        
            return -1;
        };
    }


    {
        
    }
}