package JavaDSA.javadsa02.Ch16String;

import java.util.Scanner; // must to import , if we are using Scanner 


/**
 * 
 * -- #139
 * 
 * -- problem statements 
 * 
 * -- Taking input & Printing them 
 * 
*/



/**
 * -- inbuilt things
 *  
 * -- Scanner 
 * -- System.in 
 * -- next()      == this will take first word only 
 * -- nextLine()  == this will take whole line 
 * 
*/



public class P139Input {

    public static void main (String args []){

        System.out.println("Problem Number 139 ");


        try ( Scanner sc = new Scanner(System.in) ) {
            System.out.println("Enter any things below");

            // String anything = sc.next();
            String anything2 = sc.nextLine();

            // System.out.println("Your Entered = " + anything);
            System.out.println("Your entered again  = " + anything2);
        }

        

    } 
    
}


// thank You 


