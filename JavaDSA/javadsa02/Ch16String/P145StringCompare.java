package JavaDSA.javadsa02.Ch16String;

/**
 * -- problem statements
 * 
 * -- #145
 * 
 * -- Compare string using
 * -- 01. == 
 * -- 02. equals() 
 * 
 * -- == ,      it will strictly compare 
 * -- equals(), it will compare only value 
 * 
 * -- = used to assign 
 * -- == used to compare 
 * 
 * -- inbuilt things
 * -- equal()
 * 
*/


public class P145StringCompare {

    public static void main(String args[]) {

        String s1 = "Anurag";
        String s2 = "Anurag";
        String s3 = new String("Anurag");

        if (s1 == s2) {
            System.out.println("s1 & s2 are equal");
        } else {
            System.out.println("s1 & s2 are not equal");
        }
        // s1 and s2 are pointing to the same string 
        // string is immutable 


        if (s1 == s3){
            System.out.println("s1 & s3 are equal");
        } else {
            System.out.println("s1 & s3 are not equal");
        }
        // here , 
        // we are creating s3 at new memmory address by using constructor 



        if (s1.equals(s3) && s1.equals(s2)){
            System.out.println("value of s1, s2 & s3 are equals ");
        }
        else {
            System.out.println("Value of s1 , s2 & s3 are not equal");
        }
        // equals 
        // a inbuilt function or method in java 
        // it just compare the value , not the type 
    }


}


// thank you 
// all the very best 