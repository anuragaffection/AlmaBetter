package JavaDSA.javadsa02.Ch15Array2D;

public class P93SortedMatrixBinary {

    // here , we are going to optimise the previous solution

    // we are going to use binary search, to each row
    // time complexity will be = n ( log n )


    

    // this is code still, not optimised 
    // beacuse after fiding , it is still iterating over matrix.
    public static void search(int matrix[][], int target) {

        boolean check = false;

        for (int i = 0; i < matrix.length; i++) {

            int start = 0;
            int end = matrix[i].length - 1;

            while (start <= end) {

                int mid = (start + end) / 2;

                if (matrix[i][mid] == target) {
                    System.out.println(i + " " + mid);
                    check = true;
                    break;
                    // now this is good 
                    
                }

                if (matrix[i][mid] > target) {
                    end--;
                } 
                else {
                    start++;
                }
            }
        }

        if (!check) {
            System.out.println("not found ");
        }

    }



    
    public static void main(String args[]) {

        int matrix[][] = {
                { 10, 20, 30, 40 },
                { 15, 25, 35, 45 },
                { 27, 29, 37, 47 },
                { 32, 33, 48, 56 }
        };

        // int target = 10; // 0,0
        // int target1 = 88; // not found 

        int target = 56; // 3,3

        search(matrix, target);

    }

    // i forgot to save



    // thank you
    // we will see more optimised code in next video

    // also, we will work more on return statements = to keep more optimise


    // thank you 


    // and do compare problem 92 & 93 
}
