
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class LC2265CountNode {

    public int countEqualAverageSubtrees(TreeNode root) {
        if (root == null) {
            return 0;
        }

        return countEqualAverageSubtrees(root, root) + countEqualAverageSubtrees(root.left)
                + countEqualAverageSubtrees(root.right);
    }

    private int countEqualAverageSubtrees(TreeNode root, TreeNode current) {
        if (current == null) {
            return 0;
        }

        int count = 0;
        int sum = 0;
        int size = 0;

        count += checkEqualAverage(root, current, sum, size);
        count += countEqualAverageSubtrees(root, current.left);
        count += countEqualAverageSubtrees(root, current.right);

        return count;
    }

    private int checkEqualAverage(TreeNode root, TreeNode current, int sum, int size) {
        if (current == null) {
            return 0;
        }

        sum += current.val;
        size++;

        int count = 0;

        if (root.val * size == sum) {
            count = 1;
        }

        count += checkEqualAverage(root, current.left, sum, size);
        count += checkEqualAverage(root, current.right, sum, size);

        return count;
    }
}
