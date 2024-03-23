

/**
 * -- #148
 * -- Why string are immutable 
 * 
 */

/*
 * -- 01. == 
 * -- 02. equals 
 * -- 03. =  
 */


public class P148StringImmutable {

    public static void main(String[] args) {

        String str1 = "Anurag";
        String str2 = "Anurag";
        String str3 = new String ("Anurag");
    
        if (str1 == str2){
            System.out.println("Both str1 and str2 are equal");
        }
        else {
            System.out.println("str1 and str2 are not equal");
        }
        // == 
        // == check both the value and type of data 
    
        if (str1 == str3) {
            System.out.println("Both str1 and str3 are equal");
        }
        else {
            System.out.println("str1 and str3 are not equal");
        }


        if (str1.equals(str3)) {
            System.out.println("Both str1 and str3 are equal, using equals()");
        }
        else {
            System.out.println("str1 and str3 are not equal, using equals()");
        }
    }

}


/*
 *  str 1 , str2 , str3 all have same value , anurag 
 *  but str1 and str2 are strictly equal
 *  while str1 and str3 are not equal 
 * 
 *  reason- 
 *  both str1 and str2 are pointing to same memory taken by "anurag"
 *  while str3 are taking another memory 
 * 
 *  also , 
 *  to compare only value, we have predefined function , equals()
 * 
 * 
 *  thank you 
 */
