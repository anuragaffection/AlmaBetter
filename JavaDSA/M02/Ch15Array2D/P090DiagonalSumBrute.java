// package JavaDSA.javadsa02.Ch15Array2D;

public class P090DiagonalSumBrute {
    
    /*
     *   we have to find diagonal sum 
     * 
     *   1   2    3    4
     *   5   6    7    8 
     *   9   10   11   12
     *   13  14   15   16
     * 
     *  
     *   1 + 6 + 11 + 16  = 34
     *   4 + 7 + 10 + 13  = 34
     * 
     *   total = 68
     * 
     *   also note -- number of rows = number of columns 
     * 
     * 
     * 
    */


    // tc = quadratic 
    // sc = constant
    public static int diagonal(int matrix[][]){

        int sum = 0;

        for (int i = 0; i < matrix.length; i++){
            for (int j = 0; j < matrix[0].length; j++){

                if (i == j){
                    sum += matrix[i][j];
                }
                else if ( i + j == matrix.length - 1){
                    sum += matrix[i][j];
                }
            }
        }

        return sum;
    }



    public static void main (String args []){
        int matrix [][] = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };
        //  sum =  68
        //          
        //  *   1 + 6 + 11 + 16  = 34
        //  *   4 + 7 + 10 + 13  = 34
        //  * 
        //  *   total = 68


        int matrix2 [][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        // 25 
        // 1 + 5 + 9 = 15
        // 3 + 5 + 9 = 15
        // total = 30, but 5 is repeating is each case , so diagonal sum = 25



        int answer = diagonal(matrix);
        int answer2 = diagonal(matrix2);



        System.out.println(answer);
        System.out.println(answer2);

    }

    // thank you very much 



}
