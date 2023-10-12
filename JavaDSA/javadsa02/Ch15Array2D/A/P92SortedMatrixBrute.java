// package JavaDSA.javadsa02.Ch15Array2D;

/*
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
 * here , we are going to use brute force
 * 
 * 
 * 
*/

public class P92SortedMatrixBrute {

    public static void search(int matrix[][], int target) {

        for (int i = 0; i < matrix.length; i++) {

            for (int j = 0; j < matrix[i].length; j++) {

                if (matrix[i][j] == target) {
                    System.out.println("found at index " + i + " , " + j);
                    return;
                }
            }
        }
        
        System.out.println("Not found");
    }

    public static void main(String args[]) {

        int matrix[][] = {
                { 10, 20, 30, 40 },
                { 15, 25, 35, 45 },
                { 27, 29, 37, 47 },
                { 32, 33, 48, 56 }
        };

        int target = 10;

        search(matrix, target);

    }

}

// time complexity = quadratic = O (n^2)
// space complexity = constant = O (1)

// thank You
