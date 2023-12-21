class Solution {
    public int countPrimeSetBits(int left, int right) {
        int primeCount = 0;
        for (int i = left; i <= right; i++){
            int setBitCount = Integer.bitCount(i);
            if (isPrime(setBitCount)){
                primeCount++;
            }
        }
        return primeCount;
    }

    public boolean isPrime(int setBitCount){
        if (setBitCount <= 1){
            return false;
        }
        else if (setBitCount == 2){
            return true;
        }
        else {
            for (int i = 2; i <= Math.sqrt(setBitCount); i++){
                if (setBitCount % i == 0){
                    return false;
                }
            }
        }

        return true;
    }
}