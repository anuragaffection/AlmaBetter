/*
 * -- #165
 * -- update ith bit (way 01)
 * 
 * -- A number, an index, & a bit will be given 
 * -- bit will be either 0 or 1
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

public class P165UpdateBit01 {

    public static int clearBit(int number, int index) {
        int mask = ~(1 << index);
        return number & mask;
    }

    public static int setBit(int number, int index) {
        int mask = 1 << index;
        return number | mask;
    }

    public static int updateBit(int number, int index, int bit) {
        if (bit == 0) {
            return clearBit(number, index);
        } else {
            return setBit(number, index);
        }
    }

    public static void main(String[] args) {
        int number = 10;
        int index = 1;
        int bit = 0;
        int result = updateBit(number, index, bit);
        System.out.println(result);
    }
}


// thank you 
// all the very best 