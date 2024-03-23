class Solution {

    public String sortVowels(String s) {

        char t [] = new char [s.length()];
        int prevIndex = -1;
        int currentIndex ;

        String res = "";
        
        for (int i = 0; i < s.length(); i++){

            if ( checkVowel(s.charAt(i)) ) {

                currentIndex = i ;
                
                if (prevIndex >= 0 && s.charAt(currentIndex) < t[prevIndex]){
                    char temp = t[prevIndex];
                    t[prevIndex] = s.charAt(currentIndex);
                    t[currentIndex] = temp;
                }
                else {
                    t[i] = s.charAt(i);
                    prevIndex = i ; 
                } 
                
            }
            else {
                t[i] = s.charAt(i) ;
            }
                   
        }


        for (int i = 0; i < t.length; i++){
            res += t[i];
        }

        return res;
        
    }

    public boolean checkVowel(char vowel){
        char[] vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O','U'};

        for (int i = 0; i < vowels.length; i++){
            if (vowel == vowels[i]){
                return true;
            }
        }

        return false;

    }
}