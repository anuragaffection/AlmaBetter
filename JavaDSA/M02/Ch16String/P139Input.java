package JavaDSA.javadsa02.Ch16String;
import java.util.Scanner;  // must to import


/**
 * -- #139
 * -- Taking input & Printing them 
*/


/**
 * -- Scanner 
 * -- System.in 
 * -- next()      == this will take first word only 
 * -- nextLine()  == this will take whole line 
 * 
*/


public class P139Input {

    public static void main (String args []){

        System.out.println("Enter any things below");

        try ( Scanner sc = new Scanner(System.in) ) {
            String anything = sc.nextLine();  
            System.out.println("Your Entered = " + anything);
        }
    } 
}


