// brute force approach, time limit exceed 
// how to optimize it

class Solution {
    // map
    // hashmap = random, no order
    // linkedhashmap = insertion order
    // treemap= ascending order
    public boolean checkMarked(HashMap<Integer, Boolean> markedHash) {
        for (boolean value : markedHash.values()) {
            if (value == false) {
                return false;
            }
        }
        return true;
    }

    public long findScore(int[] nums) {
        long score = 0;
        // creat a hashmap
        HashMap<Integer, Boolean> markedHash = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            markedHash.put(i, false);
        }

        while (!checkMarked(markedHash)) {
            int smallest = Integer.MAX_VALUE;
            int prevIdx = -1;
            int currIdx = -1;
            int nextIdx = -1;
            for (int i = 0; i < nums.length; i++) {
                if (!markedHash.get(i)) {
                    if (nums[i] < smallest) {
                        smallest = nums[i];
                        prevIdx = (i - 1 >= 0) ? i - 1 : -1;
                        currIdx = i;
                        nextIdx = (i + 1 < nums.length) ? i + 1 : -1;
                    }
                }
            }
            score = score + smallest;
            if (prevIdx != -1) {
                markedHash.put(prevIdx, true);
            }
            if (currIdx != -1) {
                markedHash.put(currIdx, true);
            }
            if (nextIdx != -1) {
                markedHash.put(nextIdx, true);
            }

        }

        return score;

    }
}
