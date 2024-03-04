/*
 * -- #153 - part 02 
 * -- WAP to convert decimal to binary number 
 */

/*
 * -- Binary Number consist of 0 and 1 
 * -- decimal Number consist of 0 to 9 
 * 
 * -- 8 in decimal = 1000 in binary 
 * -- 10 in decimal = 1010 in binary 
 */
public class P153BinarySystem02 {

    public static int decimalToBinary(int decimalNumber){
        int n = decimalNumber;
        int toPower = 0;
        int sum = 0;

        if (n == 0){
            return 0;
        }

        while ( n > 0) {
            int lastDigit = n % 2;
            sum += lastDigit * Math.pow(10, toPower);
            toPower++;
            n = n / 2;
        }
        return sum;
    }

    public static void main (String args []){
        int decimalNumber = 11;
        int result = decimalToBinary(decimalNumber);
        System.out.println(result);
    }
}

// thank you 
// all the very best 
