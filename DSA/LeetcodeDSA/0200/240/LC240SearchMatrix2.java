/**
 * LeetCode 240 Search Matrix 2
 */








// solution 01 
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {

        int start = 0;
        int end = matrix[0].length - 1;

        while (start <= matrix.length - 1 && end >= 0) {

            if (matrix[start][end] == target) {
                return true;
            } else if (matrix[start][end] < target) {
                start++;
            } else if (matrix[start][end] > target) {
                end--;
            }
        }
        return false;

    }
}