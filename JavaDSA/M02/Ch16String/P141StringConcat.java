package JavaDSA.javadsa02.Ch16String;


/**
 * -- #141  
 * -- Concatenation of string 
*/


/*
 * -- + 
 * -- concat()
*/


public class P141StringConcat {

    public static void main (String args []){

        String firstName = "Anurag";
        String secondName = "Affection";

        String fullName = firstName + " " + secondName;
        String fullName2 = firstName.concat(secondName);
        String fullName3 = firstName.concat(" ").concat(secondName);


        System.out.println(fullName);
        System.out.println(fullName2);
        System.out.println(fullName3);
    }
    
}



