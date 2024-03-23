
/*
 * -- #150 
 * -- For a given string convert each of first letter of each word to uppercase 
 */

/**
 * -- toUpperCase()
 * -- charAt()
 * -- StringBuilder 
 * -- append()
 * -- Character 
 * 
 * -- ''  = char type in java 
 * -- ""  = string type in java 
 *  
 */



public class P150Uppercase {

    public static String convertFirstLetter(String str){

        StringBuilder convertedStr = new StringBuilder("");

        char veryFirstLetter = Character.toUpperCase(str.charAt(0));
        convertedStr.append(veryFirstLetter);

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == ' '){
                convertedStr.append(str.charAt(i));
                i++;
                convertedStr.append(Character.toUpperCase(str.charAt(i)));
            }
            else {
                convertedStr.append(str.charAt(i));
            }
        }

        return convertedStr.toString();
    }


    public static void main(String[] args) {
        System.out.println("Problem Number 150 ");

        String str = "hello world, i am anurag affection";
        String result = convertFirstLetter(str);

        System.out.println(result);
    }
}

// thank you 
// all the very best 
// link in description 