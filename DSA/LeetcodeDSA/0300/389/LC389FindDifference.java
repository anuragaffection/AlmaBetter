class Solution {
    public char findTheDifference(String s, String t) {
        char ans = '\0'; // or any default character you want
        for (int i = 0; i < t.length(); i++ ){
            if (s.indexOf(t.charAt(i)) == -1){
                return t.charAt(i);
            }
        }
        return ans;
    }
}




// number ^ number = 0
// char ^ char = 0

// 0 ^ number = number 
// 0 ^ char = char 
class Solution {
    public char findTheDifference(String s, String t) {
        char ans = '\0'; 
        for (int i = 0; i < s.length(); i++){
            ans ^= s.charAt(i);
        }
        for (int i = 0; i < t.length(); i++){
            ans ^= t.charAt(i);
        }
        return ans;
    }
}
