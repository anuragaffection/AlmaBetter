

class Solution {
    public boolean isPathCrossing(String path) {
        Set <String> visited = new HashSet<>();
        visited.add("0,0");

        int i = 0;
        int j = 0;
        for (int k = 0; k < path.length(); k++){
            if (path.charAt(k) == 'N'){
                j++;
            }
            else if (path.charAt(k) == 'E'){
                i++;
            }
            else if (path.charAt(k) == 'S'){
                j--;
            }
            else if (path.charAt(k) == 'W'){
                i--;
            }

            String current = i + "," + j;
            if (visited.contains(current)){
                return true;
            }
            visited.add(current);
        }
        return false;
    }
}