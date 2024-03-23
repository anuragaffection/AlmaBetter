/*
 * -- #160 
 * -- Binary Right shift 
 */

/*
 * -- binary right shift, >> 
 * -- a >> b, right shift of a by b times 
 * -- will returns Integers 
 * 
 * Notes 
 * -- a >> b = a / ( pow(2,b) )
 * -- 6 >> 1 = 6 / ( pow(2,1)) = 6 / 2 = 3
 */

public class P160RightShift {
    public static void main(String[] args) {
        System.out.println(6 >> 1); // ( 6 / 2)
        System.out.println(6 >> 3); // ( 6 / 8)
        System.out.println(5 >> 2); // ( 5 / 4)
    }
}

// thank you 
// all the very best 