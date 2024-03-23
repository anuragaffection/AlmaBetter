
// very brute force 
class Solution {
    public boolean makeEqual(String[] words) {

        Map < Character, Integer> charCount = new HashMap<>();
        for (String word : words){
            for (char c : word.toCharArray()){
                charCount.put(c, charCount.getOrDefault(c, 0) + 1);
            }
        }

        // accessing count using .keySet() 
        Set <Character> myKey = charCount.keySet();
        int totalWords = words.length;
        for ( char c : myKey){
            int count = charCount.get(c);
            if ( count % totalWords != 0){
                return false;
            }
        }
        return true;
    }
}



// very brute force 
class Solution {
    public boolean makeEqual(String[] words) {

        Map<Character, Integer> charCount = new HashMap<>();
        for (String word : words) {
            for (char c : word.toCharArray()) {
                charCount.put(c, charCount.getOrDefault(c, 0) + 1);
            }
        }
        
        // accessing count using direct .values()
        int totalWords = words.length;
        for (int count : charCount.values()) {
            if (count % totalWords != 0) {
                return false;
            }
        }
        return true;
    }
}




// using array to store count 
class Solution {
    public boolean makeEqual(String[] words) {
        int[] charCount = new int[26];  // by default array store zero 
        
        for (String word : words) {
            for (char c : word.toCharArray()) {
                charCount[c - 'a']++;  // Increment count for the character
            }
        }
        
        int totalWords = words.length;
        for (int count : charCount) {
            if (count % totalWords != 0) {
                return false;
            }
        }
        return true;
    }
}

