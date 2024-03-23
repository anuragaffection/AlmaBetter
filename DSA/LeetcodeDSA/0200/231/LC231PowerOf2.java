class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n <= 0){
            return false;
        }
        return ((n) & (n-1)) == 0 ? true : false;
    }
}


// solution 01
class Solution {
    public boolean isPowerOfTwo(int n) {
      return ((n & (n-1))==0 && n>0);
    }
}


// solution 02 
public class Solution {
    public boolean isPowerOfTwo(int n) {
        return n>0 && Integer.bitCount(n) == 1;
    }
}