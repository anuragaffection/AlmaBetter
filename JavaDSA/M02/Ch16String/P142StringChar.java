package JavaDSA.javadsa02.Ch16String;

import java.util.Scanner;

/**
 * -- problem statements 
 * 
 * -- #142
 * -- charAt()
 * 
 * -- printing each character from string  
 * 
 * -- we will take string input, 
 *    then print all character of string 
 * 
*/


public class P142StringChar {


    public static void eachCharacters(String inpuString){

        for (int i = 0; i < inpuString.length(); i++){
            System.out.print(inpuString.charAt(i) + " "); 
        }
    }



    public static void main (String args []){

        try ( Scanner sc = new Scanner(System.in) ) {

            System.out.println("Enter Something ");

            String inputString = sc.nextLine();

            eachCharacters(inputString);
        }

    }
    
}

// thank you very much 
