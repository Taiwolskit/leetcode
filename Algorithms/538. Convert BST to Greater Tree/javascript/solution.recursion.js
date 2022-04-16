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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let total = 0;
    convert(root);

    function convert(root) {
        if (!root) return;
        convert(root.right);
        total += root.val;
        root.val = total;
        convert(root.left);
    }
    return root;
};
