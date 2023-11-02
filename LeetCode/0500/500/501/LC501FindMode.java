import java.util.HashMap;
import java.util.ArrayList;

public class LC501FindMode {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    class Solution {

        public int[] findMode(TreeNode root) {

            HashMap <Integer, Integer> counter = new HashMap<>();
            dfs(root, counter);

            int maxFreq = 0;

            for (int key : counter.keySet()) {
                maxFreq = Math.max(maxFreq, counter.get(key));
            }

            ArrayList<Integer> modes = new ArrayList<>();
            for (int key : counter.keySet()) {
                if (counter.get(key) == maxFreq) {
                    modes.add(key);
                }
            }

            int ans[] = new int[modes.size()];
            for (int i = 0; i < modes.size(); i++) {
                ans[i] = modes.get(i);
            }

            return ans;
        }

        public static void dfs(TreeNode root, HashMap<Integer, Integer> counter) {

            if (root == null) {
                return;
            }

            counter.put(root.val, counter.getOrDefault(root.val, 0) + 1);
            dfs(root.left, counter);
            dfs(root.right, counter);
        }

    }
}