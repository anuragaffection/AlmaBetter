package JavaDSA.javadsa02.Ch15Array2D;

public class P95SpiralMatrix2 {

    /*
     * 
     * leetcode 59
     * 
     * Given a positive integer n,
     * 
     * generate an n x n matrix filled with elements
     * from 1 to n2 in spiral order.
     * 
     * 
     * 1 2 3
     * 8 9 4
     * 7 6 5
     * 
     * 
     * Input: n = 3
     * Output: [[1,2,3],[8,9,4],[7,6,5]]
     * 
     * 
     * Input: n = 1
     * Output: [[1]]
     * 
     */

    // generating or making matrix according to question
    public static void generateMatrix(int n) {

        int matrix[][] = new int[n][n];

        int count = 0;

        int rowStart = 0;
        int rowEnd = n - 1;

        int colStart = 0;
        int colEnd = n - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {

            for (int i = colStart; i <= colEnd; i++) {
                matrix[rowStart][i] = ++count;
            }
            rowStart++;

            for (int i = rowStart; i <= rowEnd; i++) {
                matrix[i][colEnd] = ++count;
            }
            colEnd--;

            for (int i = colEnd; i >= colStart; i--) {
                matrix[rowEnd][i] = ++count;
            }
            rowEnd--;

            for (int i = rowEnd; i >= rowStart; i--) {
                matrix[i][colStart] = ++count;
            }
            colStart++;
        }

        printMatrix(matrix);
    }

    // to print our matrix
    public static void printMatrix(int matrix[][]) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {

                if (matrix[i][j] > 9) {
                    System.out.print(matrix[i][j] + " ");
                }
                else{
                    System.out.print("0" + matrix[i][j] + " ");
                }

            }
            System.out.println();
        }
    }

    public static void main(String args[]) {

        int n = 6;
        generateMatrix(n);
    }

    // thank you
    // all the very best 
    
}
