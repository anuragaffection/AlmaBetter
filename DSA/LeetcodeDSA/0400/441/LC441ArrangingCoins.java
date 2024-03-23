class Solution {
    public int arrangeCoins(int n) {
        if (n == 0){
            return 0;
        }
        
        int step = 0;
        int substract = 0;
        while (n > 0 && n > substract){
            substract = substract + 1;
            n = n - substract;
            step++;
        }
        return step;
    }
}