package JavaDSA.javadsa02.Ch16String;


/*
 * -- #150 
 * -- For a given string convert each of first letter of each word to uppercase
 * 
 * -- toUpperCase()
 * -- 
 */

public class P150Uppercase {

    public static String convertToUppercase(String str){
        StringBuilder sb = new StringBuilder("");

        char ch = Character.toUpperCase(str.charAt(0));
        sb.append(ch);
        // toUpperCase = predefined in java 
        // converting first letter of str in uppercase and adding to StringBuilde sb 

        for (int i = 1; i < str.length(); i++){

            if (str.charAt(i) == " " & ( i < str.length() - 1  )){
                sb.append(str.charAt(i));
                i++;
                sb.append(Character.toUpperCase(str.charAt(i)));
            }
            else {
                sb.append(str.charAt(i));
            }
        }

        return sb.toString();
    }
    

    public static void main(String[] args) {
        String str = "hello, i am anurag affection";
        String result = convertToUpperCase(str);
        System.out.println(result);
    }
}
