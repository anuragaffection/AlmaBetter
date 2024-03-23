class Solution {
    public int missingNumber(int[] nums) {
        int arrayXOR = nums[0];
        int countingXOR = 0 ^ nums.length;
        for(int i = 1; i < nums.length; i++){
            arrayXOR ^= nums[i];
            countingXOR ^= i;
        }
        return arrayXOR ^ countingXOR;
    }
}