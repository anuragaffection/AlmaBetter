/*
 * -- #167
 * -- Clear range of bits 
 * 
 * -- A number, and range will be given , both included 
 * -- range will be zero based index
 */

/*
 * Example 01.
 * -- Number = 1234 = 10011010010 in binary 
 * -- range  = 2 to 7
 * -- output = 1026 = 10000000010 in binary 
 * 
 * Explanation 
 * -- 1   0  0  1  1  0  1  0  0  1 0 = given 
 * -- 1   0  0  0  0  0  0  0  0  1 0 = output 
 * -- 10  9  8  7  6  5  4  3  2  1 0 = index 
 * 
 * 
 * example 02. 
 * -- Number = 1023 = 11 1111 1111 in binary 
 * -- range = 2 to 7 
 * -- output = 771 
 * 
 * Explanation 
 * -- 1  1  1  1  1  1  1  1  1  1 = given in binary 
 * -- 1  1  0  0  0  0  0  0  1  1 = output in binary 
 * -- 9  8  7  6  5  4  3  2  1  0 = index 
 * 
 */

public class P167ClearRange {

    public static int clearRange(int number, int rangeStart, int rangeEnd ){
        int maskA = (~0) << (rangeEnd + 1);
        int maskB = (( 1 << rangeStart) - 1);
        // int maskB = ~((~0) << (rangeStart));
        int maskFinal = maskA | maskB;
        return number & maskFinal;
    }
    public static void main(String[] args) {
        int number = 1234; 
        int rangeStart = 2; 
        int rangeEnd = 7;
        int result = clearRange(number, rangeStart, rangeEnd);
        System.out.println( result + " in binary = " + Integer.toBinaryString(result));
    } 
}


// int maskB = (( 1 << rangeStart) - 1);
// int maskB = ~((~0) << (rangeStart));
// both logic are same, keep in mind of index 

// build your own  logic 
// may very 
// must to check  the  problem , what you want to achieve 
