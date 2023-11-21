
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


}



{
    // .shift()
}




{
    // longest palindrome 
    {
        function main() {
            var s = readLine();
            console.log(longestPalindrome(s));
        }
        
        var longestPalindrome = function(s) {
            if (s === null || s.length < 1) {
                return "";
            }
        
            let start = 0,
                end = 0;
        
            for (let i = 0; i < s.length; i++) {
                let len1 = expandAroundCenter(s, i, i); // For odd length palindromes
                let len2 = expandAroundCenter(s, i, i + 1); // For even length palindromes
                let len = Math.max(len1, len2);
        
                if (len > end - start) {
                    start = i - Math.floor((len - 1) / 2);
                    end = i + Math.floor(len / 2);
                }
            }
        
            return s.substring(start, end + 1);
        };
        
        function expandAroundCenter(s, left, right) {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            return right - left - 1;
        }
        
    }
}