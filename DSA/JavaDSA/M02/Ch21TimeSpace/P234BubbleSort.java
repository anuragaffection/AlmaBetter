package Ch21TimeSpace;

/**
 * we are going to 
 * -- sort array using bubbleSort 
 * -- analyse time complexity 
 * -- analyse space complexity 
 */

/**
 * Bubble Sort
 * -- we are going to push the largest element to end,
 * -- sorting in ascending order
 */
public class P234BubbleSort {

    public static void sortingUsingBubbleSort(int someNumbers[]) {
        /*
         * time complexity = O(n^2) = quadratic 
         * space complexity = O(k) = constant, we are justing using a temporary variable  
         * 
         * time complexity 
         * -- our outer loop will iterate = n - 1 times 
         * -- inner loop will depend on outer loop, 
         * 
         * eg. 
         * when i = 0, j will runs n - 1 - 0 = n - 1 times 
         * when i = 1, j will runs n - 1 - 1 = n - 2 times 
         * when i = 2, j will runs n - 1 - 2 = n - 3 times 
         * ...............
         * when i = n -2, j will runs n - 1 - (n -2) = 1 times 
         * when i = n -1, j will runs n - 1 - (n -1) = 0 times 
         * 
         * ==============
         * total iterations, 
         * from i = 0 to i = n-1, will be sum of all j opeations 
         * which is equl to (n -1) + (n -2) + (n -3) + (n -4 ) + ......+ 1 + 0
         * == see in reverse order, we are adding 0 to n 
         * = (n ( n + 1) ) / 2 
         * = n^2 + n 
         * = n ^2 
         * 
         *
         * 
         */
        for (int i = 0; i < someNumbers.length - 1; i++) {
            for (int j = 0; j < someNumbers.length - i - 1; j++) {
                if (someNumbers[j] > someNumbers[j + 1]) {
                    int temp = someNumbers[j];
                    someNumbers[j] = someNumbers[j + 1];
                    someNumbers[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int someNumbers[] = { 12, 1, 5, 81, 20, 9 };
        sortingUsingBubbleSort(someNumbers);
        for (int i = 0; i < someNumbers.length; i++) {
            System.out.println(someNumbers[i]);
        }
    }
}

// thank you 
// all the very best 
