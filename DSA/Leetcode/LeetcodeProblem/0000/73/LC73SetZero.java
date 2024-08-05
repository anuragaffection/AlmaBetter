
class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;

        HashSet<Integer> hs_col = new HashSet<>();
        HashSet<Integer> hs_row = new HashSet<>();

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    hs_row.add(i);
                    hs_col.add(j);
                }
            }
        }

        for (int col : hs_col) {
            for (int k = 0; k < m; k++) {
                matrix[k][col] = 0;
            }
        }

        for (int row : hs_row) {
            for (int k = 0; k < n; k++) {
                matrix[row][k] = 0;
            }
        }
    }
}
