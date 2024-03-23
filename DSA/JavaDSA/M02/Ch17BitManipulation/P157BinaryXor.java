/*
 * -- 157 
 * -- example for XOR 
 */

/*
 * -- different bit value result true 
 * -- same bit value result false 
 * 
 * Notes 
 * -- 0 ^ 0 = 0
 * -- 0 ^ 1 = 1
 * -- 1 ^ 0 = 1
 * -- 1 ^ 1 = 0
 * 
 * Notes 
 * -- false ^ false = false 
 * -- false ^ true = true 
 * -- true ^ false = true 
 * -- true ^ true = false 
 */

public class P157BinaryXor {
    public static void main(String[] args) {
        System.out.println(4 ^ 4); // 0
        System.out.println(0 ^ 4); // 4
        System.out.println(4 ^ 5);
        System.out.println("binary value of 4 = " + Integer.toBinaryString(4));
        System.out.println("binary value of 0 = " + Integer.toBinaryString(0));
        System.out.println("binary value of 5 = " + Integer.toBinaryString(5));
    }

}

/**
 * Notes
 * -- 0 ^ number = number
 * -- number ^ number = 0
 */

// thank you
// all the very best
