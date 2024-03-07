/*
 * -- #169
 * -- Count set bits in a number 
 */

/*
 * example 
 * -- 10 = 1010 in binary = total set bits = 2
 * -- 15 = 1111 in binary = total set bits = 4 
 */

/*
 * Integer.bitCount()
 */

public class P169CountBits {

    public static int myCountBits(int number){
        int count = 0;
        int n = number;
        while (n > 0) {
            if ( (n & 1) != 0){
                count++;
            }
            n = n >> 1;
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(myCountBits(15)); // 4
        System.out.println(Integer.bitCount(15)); // 4 
    }
}

/*
 * -- we can use inbuilt method, bitCount() , to count set bits 
 * -- let's try to write our own logic to count set bits 
 */
