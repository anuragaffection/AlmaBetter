// solution 01

/*
concept used 

01. XOR of a number with 0
--- number ^ 0 = number

02. XOR of a number with number
--- number ^ number = 0

*/

class Solution {
    public int singleNumber(int[] nums) {
        int ans = 0;
        for (int num : nums){
            ans ^= num;
        }
        return ans;
    }
}