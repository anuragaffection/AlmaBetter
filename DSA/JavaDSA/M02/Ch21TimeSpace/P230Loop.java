package Ch21TimeSpace;

/**
 * -- we are going to undestand the time complexity of simple loop 
 */
public class P230Loop {
    public static void main(String[] args) {
        int n = 100;

        for (int i = 1; i <= n; i++){
            // this is our some k or constant work 
            System.out.println(i + "times");
        }

        /**
         * Let's undestand 
         * 
         * when, 
         * -- i = 1 , some k work
         * -- i = 2,  some k work 
         * -- i = 3,  some k work 
         * -- ...
         * -- ...
         * -- i = 100, some k work 
         * 
         * so, till 100, we have total work = 100 times of k = 100k 
         * 
         * similary, if i goes to n, then total work = n times k = nk 
         * 
         * so, if we are iterating a simple loop n times 
         * -- total time will be = n k 
         * -- now, ignoring the constant, we have = n 
         * -- so, time complexity = O(n) 
         * 
         * Big O
         * -- is notation for worst case time complexity 
         * -- why worst case, because we are iterating to all n 
         * 
         * 
         * Notes
         * -- basically our work directl  proportional  n 
         * -- so, the time complexity = O(n)
         */
    }
}

// thank you 
// all the very best 
