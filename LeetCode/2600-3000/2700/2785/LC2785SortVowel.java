class Solution {

    public String sortVowels(String s) {
        
        char[] t = s.toCharArray();
        int prevIndex = -1;
        int currentIndex;

        for (int i = 0; i < s.length(); i++) {
            if (checkVowel(s.charAt(i))) {
                currentIndex = i;

                while (prevIndex >= 0 && s.charAt(currentIndex) < t[prevIndex] && checkVowel(t[prevIndex])) {
                    char temp = t[prevIndex];
                    t[prevIndex] = s.charAt(currentIndex);
                    t[currentIndex] = temp;
                    currentIndex = prevIndex;
                    prevIndex--;
                }

                prevIndex = i;

            }
        }

        return new String(t);
    }

    public boolean checkVowel(char vowel) {
        char[] vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};

        for (int i = 0; i < vowels.length; i++) {
            if (vowel == vowels[i]) {
                return true;
            }
        }

        return false;
    }
}
