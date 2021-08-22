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
 * @return {number[]}
 */

var inorderTraversal = function (root) {
    if (root) {
        let result = [];
        if (root.left) {
            result = inorderTraversal(root.left);
        }
        result.push(root.val);
        if (root.right) {
            result = result.concat(inorderTraversal(root.right));
        }
        return result;
    }
    return [];
};
