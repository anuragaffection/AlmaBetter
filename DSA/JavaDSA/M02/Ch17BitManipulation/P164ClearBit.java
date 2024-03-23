/*
 * -- #164 
 * -- clear ith bit 
 * -- clear ith bit, means make bit = false at given index 
 */

/* 
 * example 
 * -- Number, 10
 * -- index, 2
 * -- binary of 10, 1010 
 * -- binary of output = 1010 
 * 
 * example 
 * -- Number, 10
 * -- index, 0
 * -- binary of  10, 1010 
 * -- binary of ouput = 1010
 * 
 * example 
 * -- Number, 10 
 * -- index , 1
 * -- binary of 10, 1010 
 * -- binary of output, 1000
 */

public class P164ClearBit {
    public static int clearBit(int number, int index) {
        // int mask = (~0) ^ (1 << index);
        int mask = ~(1 << index);
        return number & mask;
    }

    public static void main(String[] args) {
        int number = 10;
        int index = 1;
        int result = clearBit(number, index);
        System.out.println(number + " in binary = " + Integer.toBinaryString(number));
        System.out.println(result + " in binary = " + Integer.toBinaryString(result));
    }
}

// our output is true 
// make your mask, according to your logic 
// all concept lie on mask 
// take pen & paper & write logic 

// thank you 