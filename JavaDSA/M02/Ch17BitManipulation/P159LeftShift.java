/*
 * -- #159 
 * -- binary left shift 
 */

/*
 * -- binary left shift, << 
 * -- a << b, left shift of a by b times 
 * 
 * Notes 
 * -- 5 << 3 =  5 * pow (2, 3) = 5 * 8 = 40
 * -- a << b =  a * pow (2, b)
 * 
 */
public class P159LeftShift {
    public static void main(String[] args) {
        System.out.println(5 << 3); // 5 * 8
        System.out.println(5 << 2); // 5 * 4
        System.out.println(2 << 5); // 2 * 32
    }
}

// thank you 
// all the very best 
