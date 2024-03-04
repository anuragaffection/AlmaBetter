/*
 * -- #155 
 * -- Example of binary and (&)
 * -- binary and   vs   logical and 
 * -- &  vs  && 
 */

/*
 * -- binary & , returns  integer value 
 * -- logical &&, returns true or false 
 * 
 * 
 * Notes 
 * -- 0 & 0 = 0
 * -- 0 & 1 = 0
 * -- 1 & 0 = 0
 * -- 1 & 1 = 1
 * 
 * Notes 
 * -- false & false = false 
 * -- false & true = false 
 * -- true & false = false
 * -- true & true = true
 * 
 * 
 * example
 * -- 5 & 6 = 4
 * -- 101 & 110 = 100
 * -- 7 & 8 = 0
 * -- 111 & 1000 = 104
 * 
 * Note
 * -- in all example we are using value as integer, not as binary 
 * -- Internally, 5 and 6 will be converted to binary,  
 *    then their binary and (&) will happen
 * -- also we are using 111 & 1000 as integer, not as binary number 
 */

public class P155BinaryAnd {
    public static void main(String args[]) {
        int a = 7;
        int b = 8;
        System.out.println(a & b);
        System.out.println(111 & 1000);
    }
}
