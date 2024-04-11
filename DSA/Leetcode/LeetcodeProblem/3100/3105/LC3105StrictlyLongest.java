
// way 01 
// Brute force 
class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int countInc = 1;
        int countDec = 1;

        int currentCountInc = 1;
        int currentCountDec = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                currentCountDec = 1;
                currentCountInc++;
            } else if (nums[i] < nums[i - 1]) {
                currentCountDec++;
                currentCountInc = 1;
            } else {
                currentCountInc = 1;
                currentCountDec = 1;
            }
            if (currentCountInc > countInc) {
                countInc = currentCountInc;
            }
            if (currentCountDec > countDec) {
                countDec = currentCountDec;
            }
        }

        if (countInc > countDec) {
            return countInc;
        }

        return countDec;
    }
}