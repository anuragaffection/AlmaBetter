package JavaDSA.javadsa02.Ch15Array2D;

public class P91DiagonalSumOpt {

    // optimised code to find diagonal sum 

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



    // tc = linear
    // sc = constant 


    public static int diagonal (int matrix[][]){

        int sum = 0;

        for (int i = 0; i < matrix.length; i++){

            sum += matrix[i][i];

            if (i != matrix.length - i - 1){
                sum += matrix[i][matrix.length-i-1];
            }
        }

        return sum;
    }


    public static void main (String args[]){

        int matrix [][] = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };

        int answer = diagonal(matrix);
        System.out.println(answer);


        int matrixMore [][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int answerMore = diagonal(matrixMore);
        System.out.print(answerMore);
    }


    // now do compare between 
    // Problem 90 = P90DiagonalSumBrute.java = by using brute force 
    // problem 91 = P91DiagonalSumOpt.java   = optimised code 

    // check time complexity (tc) of both code


    // thank you
    // all the very best 
    // github link in description 
    
}
