/*
 * -- #163 
 * -- Set ith bit
 * -- We have to set bit at given index 
 * -- set bit means, make true at given index 
 * 
 * example 
 * -- Number, 10
 * -- index, 2
 * -- binary of number, 1010 
 * -- binary of output = 1110 
 * 
 * example 
 * -- Number, 10
 * -- index, 0
 * -- binary of number, 1010 
 * -- binary of ouput = 1011
 */

public class P163SetBit {

    public static int setBit (int number, int index){
        int mask = 1 << index;
        return number | mask;
    }
    public static void main(String[] args) {
        int number = 10;
        int index = 2;
        int output = setBit(number, index);
        System.out.println("binary of number, " + number + " = " + Integer.toBinaryString(number));
        System.out.println("binary of output, " + output + " = " + Integer.toBinaryString(output));
    }
}

// our output is correct 
// thank you 
// all the very best 
