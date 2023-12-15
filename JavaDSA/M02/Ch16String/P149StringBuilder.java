package JavaDSA.javadsa02.Ch16String;


/**
 * -- #149
 * -- printing alphabets using string builder 
 */


/* 
 * -- StringBuilder myString = new StringBuilder(' ');
 * -- append()
 * -- length()
 * -- toString()
 * 
 * -- why we need string builder 
 * -- we can not append or add in simple string literal 
 * -- we can concatenate in string literal  
 * 
 */


public class P149StringBuilder {

    public static void main(String[] args) {

        StringBuilder alphabets = new StringBuilder("") ;

        for (char i = 'a'; i <= 'z' ; i++){
            alphabets.append(i);
        }

        System.out.println(alphabets);
        System.out.println(alphabets.length());
    }
}

// thank you 
// all the very best 

