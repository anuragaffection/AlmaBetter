class Solution {
    public int mySqrt(int x) {
        if (x == 0) {
            return x;
        }
        int start = 1;
        int last = x;
        while (start <= last) {
            int mid = start + (last - start) / 2;
            if (mid <= (x / mid) && (mid + 1) > (x / (mid + 1))) {
                return mid;
            } else if (mid < x / mid) {
                start = mid + 1;
            } else {
                last = mid - 1;
            }
        }
        return last;
    }
}
