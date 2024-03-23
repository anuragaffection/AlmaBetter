
class Solution {
    public int hammingDistance(int x, int y) {
        int xorOutput = x ^ y; 
        int count = 0;

        while (xorOutput > 0){
            if ( (xorOutput & 1) == 1){
                count++;
            }
            xorOutput = xorOutput >> 1 ;
        }
        return count;
    }
}