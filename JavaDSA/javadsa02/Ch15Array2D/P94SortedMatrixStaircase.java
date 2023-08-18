package JavaDSA.javadsa02.Ch15Array2D;

public class P94SortedMatrixStaircase {

    /*
     * 
     * We have to find the index of target element in sorted matrix
     * 
     * 
     * matrix as :-
     * 
     * 10 20 30 40
     * 15 25 35 45
     * 27 29 37 47
     * 32 33 48 56
     * 
     * target = 37
     * 
     * 
     * 
     * here , we are going to use staircase concept
     * 
     * 
     * 
     * 
     * LeetCode 74 (similar or exact problme here )
     * 
     * You are given an m x n integer matrix matrix with the following two
     * properties:
     * 
     * a. Each row is sorted in non-decreasing order.
     * b. The first integer of each row is greater than the last integer of the
     * previous row.
     * 
     * 
     * 
     * 
     */




    public static void search(int matrix[][], int target) {

        boolean found = false;

        int row = 0;
        int col = matrix[0].length - 1;

        while (row < matrix.length && col >= 0) {

            if (matrix[row][col] == target) {
                System.out.println("Target found at " + "(" + row + ", " + col + ")");
                found = true;
                break;
            } else if (matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }

        if (!found) {
            System.out.println("Not found");
        }

    }


    public static void main(String args[]) {

        int matrix[][] = {
                { 10, 20, 30, 40 },
                { 15, 25, 35, 45 },
                { 27, 29, 37, 47 },
                { 32, 33, 48, 56 }
        };

        int target = 37; // 2, 2

        // target = 88; // not found 

        search(matrix, target);
    }

    // thank you 
    // now compare, problem number 94, 93, 92 


}
