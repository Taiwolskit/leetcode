/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    // if (root === undefined || root === null) {
    //     return 0;
    // }
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

    let max = 0;

    function dfs(node, depth) {
        if (node.left === null && node.right === null)
            max = Math.max(max, depth);

        if (node.left) {
            max = dfs(node.left, depth + 1);
        }

        if (node.right) {
            max = dfs(node.right, depth + 1);
        }
        return max;
    }
    return root ? dfs(root, 1) : max;
};
