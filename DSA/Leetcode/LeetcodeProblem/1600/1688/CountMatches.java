

// way 01 
// using Recursion  

class Solution {

    int sum = 0;

    public int numberOfMatches(int n) {

        if (n <= 0){
            return 0;
        }


        if (n % 2 == 0){
            if (n == 2){
               return 1;
            }
            sum = (n / 2) + numberOfMatches(n / 2);
        }
        else {
            if (n == 1){
               return 0;
            }
            sum = ((n-1) / 2) + numberOfMatches( (n -1) / 2 + 1  );
        }

        return sum;
        
    }

}


