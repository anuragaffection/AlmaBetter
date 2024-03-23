/*
 * -- #166 (way 01)
 * -- clear last i bits 
 * -- we have to clear last i bits 
 * -- a number & total_bits_to_clear  will be given
 */

/* example 
 * -- Number = 15 = 1111 in binary 
 * -- total bits to clear = 2
 * -- result = 12 = 1100 
 * 
 * example 
 * -- Number = 15 = 1111 in binary 
 * -- total bits to clear = 3
 * -- result = 8 = 1000 
 * 
 */

public class P166ClearLastBits01 {

    public static int clearBit(int result, int i) {
        int mask = ~(1 << i);
        return result & mask;
    }

    public static void main(String[] args) {
        int number = 15;
        int total_bits_to_clear = 3;

        int result = number;
        for (int i = 0; i < total_bits_to_clear; i++) {
            result = clearBit(result, i);
        }

        System.out.println(result + " = " + Integer.toBinaryString(result));
    }
}

// the approach was brute force, simply clear at each index
// try to optimize the above solution, make your own logic 
// thank you
// all the very best
