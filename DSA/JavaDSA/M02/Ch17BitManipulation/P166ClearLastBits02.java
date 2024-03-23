
/*
 * -- #166 (way 02)
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
 * example 
 * -- Number = 8 = 1000 in binary 
 * -- total bits to clear = 3
 * -- result = 8 = 1000 
 * 
 */

public class P166ClearLastBits02 {
    public static int clearBits (int number, int total_bits_to_clear) {
        int mask = (~0) << total_bits_to_clear;
        return number & mask;
    }
    public static void main(String[] args) {
        int number = 8;
        int total_bits_to_clear = 3;
        int result = clearBits(number, total_bits_to_clear);
        System.out.println(result + " = " + Integer.toBinaryString(result));
    }
}

// the above code is optimized 
//   0   =  0000 0000 in binary 
//   ~0  =  1111 1111 in binary 
//   1   =  0000 0001 in binary 
//   ~1  =  1111 1110 in binary 

// thank you 
// all the very best 
