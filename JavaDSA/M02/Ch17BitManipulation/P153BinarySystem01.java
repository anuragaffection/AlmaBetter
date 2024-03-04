/*
 * -- #153 - part 01
 * -- WAP to convert binary into decimal 
 */

/*
 * -- Binary Number consist of 0 and 1 
 * -- decimal Number consist of 0 to 9 
 * 
 * -- 100 in binary = 4 in decimal 
 * -- 1000 in binary = 8 in decimal 
 */

public class P153BinarySystem01 {

    public static int binaryToDecimal(int binaryNumber) {
        int n = binaryNumber;
        int sum = 0;
        int toPower = 0;

        if (n == 0) {
            return 0;
        }

        while (n > 0) {
            int lastDigit = n % 10;
            sum += lastDigit * Math.pow(2, toPower);
            toPower++;
            n /= 10;
        }
        return sum;
    }

    public static void main(String args[]) {
        int binaryNumber = 101;
        int result = binaryToDecimal(binaryNumber);
        System.out.println(result);
    }
}

// thank you
// link in description
