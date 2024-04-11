// time complexity = n log n
class Solution {
    public int maxProductDifference(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return nums[n-1] * nums[n-2] - nums[0] * nums[1];
    }
}



// solution 02 
// time complexity = n  
class Solution {
    public int maxProductDifference(int[] nums) {
        int bigFirst = Integer.MIN_VALUE;
        int bigSecond = Integer.MIN_VALUE;
        int smallFirst = Integer.MAX_VALUE;
        int smallSecond = Integer.MAX_VALUE;

        for (int num : nums){

            if (num > bigFirst){
                bigSecond = bigFirst;
                bigFirst = num;
            }
            else if (num > bigSecond) {
                bigSecond = num;
            }

            if (num < smallFirst){
                smallSecond = smallFirst;
                smallFirst = num;
            }
            else if (num < smallSecond){
                smallSecond = num;
            }
        }

        return bigFirst * bigSecond - smallFirst * smallSecond;
    }
}