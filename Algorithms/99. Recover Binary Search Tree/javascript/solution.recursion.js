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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let x = null,
        y = null,
        prev = null;

    const findTwoSwapped = (node) => {
        if (!node) {
            return;
        }

        findTwoSwapped(node.left);
        if (prev && node.val < prev.val) {
            y = node;
            if (x === null) {
                x = prev;
            } else {
                return;
            }
        }
        prev = node;
        findTwoSwapped(node.right);
    };

    findTwoSwapped(root);
    [x.val, y.val] = [y.val, x.val];
};
