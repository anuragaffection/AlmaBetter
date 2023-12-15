package JavaDSA.javadsa02.Ch16String;

import java.util.Scanner;

/**
 * -- problem statements 
 * 
 * -- #140 
 * 
 * -- finding the legnth of string 
 * 
 * -- we are going to take input from user, 
 *    then we will find the length of input 
 * 
*/



/*
 * -- Notes 
 * 
 * -- length()   = used to find the length 
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
