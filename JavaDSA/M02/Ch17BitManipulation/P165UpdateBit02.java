/*
 * -- #165
 * -- update ith bit (way 02)
 * 
 * -- A number, an index, & a bit will be given 
 * -- this problem is same as previous , but different solutions 
 */

/*
 * Example 
 * -- Number = 10 , index = 2, a bit = 1
 * -- Number 10 = 1010 in binary 
 * -- updating with bit 1 at index 2 = 1110
 * -- result = 1110 = 14 in decimal 
 * 
 * example 
 * -- Number = 10, index = 1, a bit = 0
 * -- Number 10 = 1010 in binary 
 * -- updating with bit 0 at index 1 = 1000
 * -- result = 8
*/

public class P165UpdateBit02 {

    public static int clearBit(int number, int index) {
        int mask = ~(1 << index);
        return number & mask;
    }

    public static int updateBit(int number, int index, int bit) {
        int nClear = clearBit(number, index);
        int mask = bit << index;
        return nClear | mask;
    }

    public static void main(String[] args) {
        int  number = 10; 
        int index = 1; 
        int bit = 0;
        System.out.println(updateBit(number, index, bit));
    }
}

// try to build your own logic 
// thank you 
