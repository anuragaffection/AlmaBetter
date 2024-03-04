/*
 * --- #162
 * -- Get ith bit 
 * 
 * 
 * example 
 * -- find the 2nd bit of 15
 * -- 15 = 1111 in binary 
 * -- 2nd bit of 15 = 1
 * 
 * 
 * example 
 * -- find the 1st bit of 2
 * -- 2 = 10 in binary 
 * -- 1st bit of 2 = 1
 * 
 * 
 * Notes 
 * -- 1 0 1 0 = 10 in decimal 
 * -- 3 2 1 0 = indexing 
 * 
 * so 
 * -- zeroth bit of 10 = 0
 * -- 1st bit of 10 = 1
 * -- 2nd bit of 10 = 2
 * 
 */

public class P162GetBit {
    public static int getBit(int number, int index) {
        int mask = 1 << index;
        if ((number & mask) == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    public static void main(String[] args) {
        int number = 10;
        int index = 1;
        int result = getBit(number, index);
        System.out.println(result);
    }
}

// thank you
// all the very best