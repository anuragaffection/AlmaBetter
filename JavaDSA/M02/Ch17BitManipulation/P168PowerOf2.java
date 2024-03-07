/*
 * -- #168
 * -- power of 2 
 * -- return true if a number is power of 2 else false 
 */

/*
 * example 
 * -- 1 = true = pow(2,0)
 * -- 2 = true = pow(2,1)
 * -- 3 = false 
 * -- 4 = true = pow(2,2)
 * -- 8 = true = pow(2,3)
 * -- 14 = false 
 * -- 15 = false 
 */

public class P168PowerOf2 {
    public static boolean isPowerOf2(int number){
        return (number & (number - 1)) == 0;
    }
    public static void main(String[] args) {
        System.out.println(isPowerOf2(1)); // true 
        System.out.println(isPowerOf2(2)); // true
    }
}


// there is pattern, we see if a number is power of 2 
// 16 & 15 == 0
// 4 & 3 == 0
// 8 & 7 == 0
// n & n-1 == 0

// thank you 
// all the very best 