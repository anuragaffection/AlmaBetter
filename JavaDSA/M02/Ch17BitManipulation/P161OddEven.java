/*
 * -- #161 
 * -- Check if a number is odd or even
 * 
 * condition
 * -- you have to use bit manipulation 
 * -- you don't have to use artihmetic operator 
 */

/*
 * example 
 * -- 9 = odd 
 * -- 8 = even 
 * 
 * patterns 
 * -- 8 & 1 = 0
 * -- 6 & 1 = 0
 * -- even & 1 = 0
 * 
 * -- 7 & 1 = 1
 * -- 9 & 1 = 1
 * -- odd & 1 = 1
 */

public class P161OddEven {
    public static String checkOddOrEven(int number) {
        int mask = 1;
        if (number <= 0) {
            return "Number must be greater than 0";
        }
        if ((number & mask) == 0) {
            return number + " is " + "Even";
        } else {
            return number + " is " + "Odd";
        }
    }

    public static void main(String[] args) {
        String result = checkOddOrEven(45);
        String result1 = checkOddOrEven(0);
        String result2 = checkOddOrEven(8);
        System.out.println(result);
        System.out.println(result1);
        System.out.println(result2);
    }
}
