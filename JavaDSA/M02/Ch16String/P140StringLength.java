
import java.util.Scanner;

/*
 * -- #140 
 * -- finding the legnth of string 
 * -- we are going to take input from user, 
 *    then we will find the length of input 
 * 
*/


/*
 * -- length
 * -- length()   
 * 
*/




public class P140StringLength {

    public static void main (String args []){

        try (Scanner sc = new Scanner (System.in)) {
            System.out.println("Enter Your Name ");
            String name = sc.nextLine();

            System.out.println("The length of your name is = " + name.length());
        }
    }

    
}


// thank you 
