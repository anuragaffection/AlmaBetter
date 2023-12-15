package JavaDSA.javadsa02.Ch16String;


/**
 * -- #146
 * -- finding substring from string - using own logic 
 * -- finding substring form string - using inbuilt function = subString()
 * 
*/


/*
 * -- substring()
 * -- charAt()
 */



public class P146SubString {

    public static String mySubString(String word, int si, int ei){
        String subStr = "";

        // here, we are not including ending index 
        for (int i = si; i < ei ; i++){
            subStr += word.charAt(i);
        }

        return subStr;

    }

    public static void main (String args []){
        String word = "WelcomeToBharat";
        int startIndex = 0;
        int endIndex = 5;
       
        // ending index is not included 
        // mySubString = is a user defined method 
        String output = mySubString(word, startIndex, endIndex);
        System.out.println("using user defined = " + output);

        // by default ending index is excluded in subString()
        // subString = is an inbuilt method 
        String output2 = word.substring(startIndex, endIndex);
        System.out.println("using inbuilt = " +  output2);

    }
    
}

