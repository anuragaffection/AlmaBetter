public class P232NestedLoop2 {
    public static void main(String[] args) {
        int n = 10;

        int totalCount = 0;
        int totalJOperations = 0;
        for (int i = 0; i < n; i++) {

            int eachTimeJCountForI = 0;
            for (int j = 0; j < i; j++) {
                eachTimeJCountForI++;
                totalCount++;
            }
            totalJOperations += eachTimeJCountForI;
            System.out.println("for " + i + " , total j operations = " + eachTimeJCountForI);

        }
        System.out.println("total operations = " + totalCount);
        System.out.println("sum of total j operations = " + totalJOperations);

        /**
         * -- if we count the operations for n = 10, this nestedLoop, we have 45
         * --
         * 
         * -- try the recall the previous NestedLoop
         * -- here, in this P232NestedLoop2, our second Loop j , runnig till i times
         * -- while, in previous video P231NestedLoop, our second loop j, running till n
         * times
         */

        /**
         * Now analyse time complexity
         * ---
         */

        /**
         * for 0 , total j operations = 0
         * for 1 , total j operations = 1
         * for 2 , total j operations = 2
         * for 3 , total j operations = 3
         * for 4 , total j operations = 4
         * for 5 , total j operations = 5
         * for 6 , total j operations = 6
         * for 7 , total j operations = 7
         * for 8 , total j operations = 8
         * for 9 , total j operations = 9
         * 
         * for 10, toal operations = (10 * (10-1)) / 2 = 45
         * 
         * for n total, j operations = (n * (n -1) ) / 2
         * for n total operation = (n * (n -1) ) / 2 = ( n^2 - n ) / 2
         * 
         * Now, by ignoring constant , we have = n ^ 2 - n
         * Now, by ignoring lower limit, we have = n ^ 2
         * 
         * so, time complexity, = O (n ^ 2)
         */
    }
}


/**
 * thank You , that's all for today
 */