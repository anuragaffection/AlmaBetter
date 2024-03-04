/*
 * -- #158 
 * -- binary one's complement 
 */

/*
 * -- one's complement also called as NOT operator or negation or first complement 
 * 
 * Notes 
 *   ~ true = false 
 *   ~ false = true 
 * 
 * Notes 
 *   ~ 1 = 0
 *   ~ 0 = 1
 */

public class P158FirstComplement {
    public static void main(String[] args) {
        System.out.println(~4);
        System.out.println("binary of 4 = " + Integer.toBinaryString(4));
        System.out.println("binary of ~4 = " + Integer.toBinaryString(~4));
    }
}


// When most significant bit = 1, then our value is negative 
// when most significat bit = 0, then  our value is positive 
// the above concept is true, when you know the value in 32-bit 
