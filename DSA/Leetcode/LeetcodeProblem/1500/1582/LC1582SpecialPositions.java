class Solution {
    public int numSpecial(int[][] mat) {
        int count = 0;

        for (int i = 0; i < mat.length; i++){
            for (int j = 0; j < mat[i].length; j++){
                if (mat[i][j] == 1 && isSpecial(i, j, mat)){
                    count++;
                }
            }
        }
        return count;
    }

   public boolean isSpecial(int i, int j, int[][] mat) {
    for (int k = 0; k < mat.length; k++) {
        if (k == i) {
            continue;
        }
        if (mat[k][j] == 1) {
            return false;
        }
    }