package Ch21TimeSpace;

/**
 * we are going to analyse the time complexity of nested loop 
 */
public class P231NestedLoop {
    public static void main(String[] args) {
        int n = 5;

        int count = 1;

        // we are going to print count ,to see how many times nested loop runs 
        for (int i = 0; i < n; i++){
            for (int j = 0; j < n; j++){
                System.out.println(count);
                count++;
            }
        }

        /**
         * when,
         * -- n = 5, total execution = 5 
         * -- n = 10, total execution = 100
         * -- n = 100, total execution = 10000
         * 
         * 
         * so, we can our total work is directly proportional to n ^ 2 
         * -- so time complexity = O(n^2)
         * 
         * Notes 
         * -- to analyse the time complexity, 
         * analyse how many times certain task is happening 
         * 
         */
    }
}


// thank You 
// all the very best 
// also, sorry for my english 
// i don't know , but some times i forgot the spelling 

