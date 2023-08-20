package JavaDSA.javadsa02.Ch15Array2D;

// LeetCode 240 = search matrix II

// basically , 
// we have to check the target, 
// is it available in the sorted matrix or not 

/**
 * Write an efficient algorithm that searches for a value target
 * in an m x n integer matrix matrix.
 * 
 * This matrix has the following properties:
 * --- Integers in each row are sorted in ascending from left to right.
 * --- Integers in each column are sorted in ascending from top to bottom.
 */

public class P96SearchMatrix2 {

    public static boolean search(int matrix[][], int target){

        int start = 0;
        int end = matrix[0].length - 1;

        while(start <= matrix.length - 1 && end >= 0){

            if (matrix[start][end] == target){
                return true;
            }
            else if (matrix[start][end] < target){
                start++;
            }
            else if (matrix[start][end] > target){
                end--;
            }
        }
        return false;
    }

    public static void main(String[] args) {

        int matrix[][] = {
            { 1,  4,  7, 11, 15},
            { 2,  5,  8, 12, 19},
            { 3,  6,  9, 16, 22},
            {10, 13, 14, 17, 24},
            {10, 21, 23, 26, 30}
        };

        int target = 200;
        
        boolean result = search(matrix, target);

        if (result){
            System.out.println("Found ");
        }
        else{
            System.out.println("Not in matrix");
        }

    }

}

// thank you

// you may check similar problem 
// problem number 96, 94, 93, 92, === these all are same problme with different time complexity 
// problem number 96, & 94 are exact same

// all the very best form Anurag Affection