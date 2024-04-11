
// way 01
// very brute force , but it works!
// exceed time limit  for large input
class Solution1 {

    public static int findMedian(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length / 2];
    }

    public long minOperationsToMakeMedianK(int[] nums, int k) {
        int count = 0;
        Arrays.sort(nums);
        int median = findMedian(nums);

        while (median != k) {
            if (median > k) {
                nums[nums.length / 2] = median - 1;
            } else {
                nums[nums.length / 2] = median + 1;
            }
            count++;
            median = findMedian(nums);
        }

        return count;
    }
}





// way 02
// fully correct + optimized 
class Solution2 {

    public long minOperationsToMakeMedianK(int[] nums, int k) {
        int n = nums.length;
        long count = 0;
        Arrays.sort(nums);

        for (int i = 0; i <= n / 2; ++i) {
            count += Math.max(0, nums[i] - k);
        }

        for (int i = n / 2; i < n; ++i) {
            count += Math.max(0, k - nums[i]);
        }
        return count;
    }
}
