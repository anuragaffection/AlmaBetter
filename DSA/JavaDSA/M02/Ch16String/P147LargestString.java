

/**
 * -- #147
 * -- Find the largest string 
*/


/**
 * -- compareTo()
 * -- compareToIgnoreCase()
 */


public class P147LargestString {

    public static void main (String args[]){
        String fruits [] = {"apple", "Apple", "mango", "Mango"};
        String largest = fruits[0];
        String largestIgnoreCase = fruits[0];

        for (int i = 1; i < fruits.length; i++){
            if (largest.compareTo(fruits[i]) < 0){
                largest = fruits[i];
            }

            if (largest.compareToIgnoreCase(fruits[i]) < 0){
                largestIgnoreCase = fruits[i];
            }
        }

        System.out.println(largest);
        System.out.println(largestIgnoreCase);
    }
}

// a & A both have different value by default 
// here largest is getting decides by value of first letter of word

// compareToIgnoreCase() treats a and A both as same 
