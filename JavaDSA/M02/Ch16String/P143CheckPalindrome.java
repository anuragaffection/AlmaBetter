package JavaDSA.javadsa02.Ch16String;


/**
 * -- #143
 * -- Check if string is palindrome or not 
*/


/*
 * -- charAt()
 * -- length()
 * -- 
 */


public class P143CheckPalindrome {

    public static boolean isPalindrome(String str){

        for (int i = 0; i <= str.length() / 2; i++){
            if (str.charAt(i) != str.charAt(str.length() - 1 - i)){
                return false;
            }
        }
        return true;
    }


    public static void main (String args []){

        String str = "madam";
        System.out.println(isPalindrome(str)); // true 

        String str2 = "Anurag";
        System.out.println(isPalindrome(str2)); // false 
    }

}


// thank you very much 
// link in description 
