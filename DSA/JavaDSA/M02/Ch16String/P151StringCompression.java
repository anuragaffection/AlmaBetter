
/*
 * -- #151 
 * -- String compression 
 * -- length of compressed strig should be less than or equal to original one 
 * 
 * -- example. 
 * -- aaabbcccdd = a3b2c3d2
 * -- abbcc = ab2c2 
 * -- abcd = abcd 
 * -- we have to compress string as shown in example 
 */

 
/**
 * -- time complexity = linear 
 * -- space complexity = constant 
 * 
 * -- Integer vs int 
 * -- chaAt()
 * -- toString()
 * 
 * -- we cannot convert  #int    to  #String  using toString()
 * -- but we can convert #Integer to #String  using toString()
 */

 
public class P151StringCompression {

    public static String compression(String str){
        String compressedStr = "";
        
        for (int i = 0; i < str.length(); i++){
            Integer repeatLetters = 1 ;

            while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
                repeatLetters++;
                i++;
            }

            compressedStr += str.charAt(i);

            if (repeatLetters > 1){
                compressedStr += repeatLetters.toString();
            }
        }
        return compressedStr;
    }
    

    public static void main(String[] args) {
        System.out.println("Welcome to Anurag Affection. #Problem 151");

        String str1 = "aaabbcccdd";
        String str2 = "abcd";
        String str3 = "abccddaaa";

        String result1 = compression(str1);
        String result2 = compression(str2);
        String result3 = compression(str3);

        System.out.println(result1); // a3b2c3d2
        System.out.println(result2); // abcd 
        System.out.println(result3);
    }
}

// thank you 
// all the very best 
