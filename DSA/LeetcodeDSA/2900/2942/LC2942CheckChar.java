
class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        List <Integer> myList = new ArrayList<>();

        for (int i = 0; i < words.length; i++){
            if (containChar(words[i], x)){
                myList.add(i);
            }
        }
        return myList;
    }

    public boolean containChar(String word, char x){
        for (int i = 0; i < word.length(); i++){
            if (word.charAt(i) == x){
                return true;
            }
        }
        return false;
    }
}