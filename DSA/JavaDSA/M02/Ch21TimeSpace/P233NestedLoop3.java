package Ch21TimeSpace;

public class P233NestedLoop3 {
    public static void main(String[] args) {
        int n = 10;

        int count = 0;
        for (int i = 1; i <= n; i++){
            for (int j = 1; j <= 20; j++){
                count++;
                System.out.print(count + " ");
               
            }
        }

        /**
         * so, here time complexity is 10 * 20 times 
         * so, for n , time complexity is n * 20 times 
         * so, for n , time complexity is n * k times, assume 20 = some costant 
         * 
         * so, time complexity after dropping constant = n 
         * so, time complexity of above loop is = O(n), which is linear 
         */
    }
}
