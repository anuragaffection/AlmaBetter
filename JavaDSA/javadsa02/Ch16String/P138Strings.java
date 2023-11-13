package JavaDSA.javadsa02.Ch16String;


/**
 * -- problem statements 
 * 
 * -- #138 
 * -- Ways to store string in java 
 * 
*/


/*
 * our aim 
 * 
 * -- we will see, different ways to declare string in java 
 * 
 * -- 01. using array 
 * -- 02. using String literal 
 * -- 03. using String Constructor 
 * -- 04. using String builder 
 */




public class P138Strings {

    public static void main (String args[]) {

        char myStringArray01 [] = { 'H', 'E', 'L', 'L', 'O'}; // this is an array of character 

        String myStr02 = "HELLO World";

        String myStr03 = new String ("Welcome to India");

        StringBuilder myStr04 = new StringBuilder("Namastey Java ");





        System.out.println("Problem 138 ");

        System.out.println(myStringArray01);
        System.out.println("02. Using String literal =  " +  myStr02);
        System.out.println("03. Using string Constructor = " + myStr03);
        System.out.println("04. Using String Builder =  " + myStr04);


        System.out.println("Thank You ");

    }
    
}

