/*
 * -- #154 
 * -- List all bitwise operators 
 */

/*
 * -- binary and =  &
 * -- binary or =  |
 * -- bindary xor =  ^
 * -- binary ones compliment =  ~ 
 * -- binary left shift =  << 
 * -- binary right shift =  >> 
 * -- binary zero fill right shift =  >>> 
 */

public class P154BitwiseOperator {
    public static void main (String args[]){
        int a = 4;
        int b = 5;
        System.out.println("binary and = " + (a & b));
        System.out.println("binary or = " + (a | b));
        System.out.println("binary xor = " + (a ^ b));
        System.out.println("one complement = " + (~a));
        System.out.println("left shift  = " + (a << b));
        System.out.println("right shift = " + (a >> b));
        System.out.println("zero fill right shift = " + (a >>> b));
    }
}

// you have to first understand all on notebook , how they are working 
// thank you 
// all the very best 