/*
 * -- #156 
 * -- example of binary 
 * -- binary OR vs logical OR 
 */

/*
 * -- binary or returns integer value 
 * -- logical or returns boolean value 
 * 
 * Notes 
 * -- false | false = false 
 * -- false | true = true 
 * -- true | false = true 
 * -- true | true = true 
 * 
 * Notes 
 * -- 0 | 0 = 0
 * -- 0 | 1 = 1 
 * -- 1 | 0 = 1 
 * -- 1 | 1 = 1
 * 
 * Inbuilt methods 
 * -- Integer.toBinaryString()
 * 
 */

public class P156BinaryOr {
    public static void main(String args[]) {
        System.out.println(5 | 6);
        System.out.println(101 | 110);

        System.out.println("value of 5 in binary = " + Integer.toBinaryString(5));
        System.out.println("value fo 101 in binary = " + Integer.toBinaryString(101));
    }
}


// thank you 
// all the very best 
