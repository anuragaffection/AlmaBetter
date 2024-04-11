
// solution 01 
// brute force 
class Solution {
    public int maxScore(String s) {
        int ans = 0;
        for (int i = 0; i < s.length() -1 ; i++){
            String leftZero = s.substring(0,i+1);
            String rightOne = s.substring(i+1, s.length());
            int totalCount = count(leftZero, rightOne);
            if (totalCount > ans){
                ans = totalCount;
            }
        }
        return ans;
    }

    public int count (String leftZero, String rightOne){
        int countZero = 0;
        for (int i = 0; i < leftZero.length(); i++){
            if (leftZero.charAt(i) == '0'){
                countZero++;
            }
        }

        int countOne = 0;
        for (int i = 0; i < rightOne.length(); i++){
            if (rightOne.charAt(i) == '1'){
                countOne++;
            }
        }
        return countZero + countOne;
    }
}





// solution 02 
// just writing the solution 01 in better way 
class Solution {
    public int maxScore(String s) {
        int ans = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            int count = 0;
            for (int j = 0; j <= i; j++){
                if (s.charAt(j) == '0'){
                    count++;
                }
            }
            for (int j = i+1; j < s.length(); j++){
                if (s.charAt(j) == '1'){
                    count++;
                }
            }
            ans = Math.max(ans, count);
        }
        return ans;
    }
}