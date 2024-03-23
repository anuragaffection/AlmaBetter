
// solution 01 
// by default backward indexing 
class Solution {
    public int[] evenOddBit(int n) {
        
        if (n <= 0){
            return new int []{0,0};
        }

        int idx = 0;
        int evenCount = 0;
        int oddCount = 0;

        while(n > 0){
            if ( (idx % 2 == 0) && ( (n & 1 ) == 1)){
                evenCount++;
            }
            else if ((n & 1) == 1) {
                oddCount++;
            }
            idx++;
            n >>= 1;
        }

        return new int []{evenCount, oddCount};
    }
}