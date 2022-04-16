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
    let total = 0,
        node = root;
    const stack = [];
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.right;
        }

        node = stack.pop();
        total += node.val;
        node.val = total;
        node = node.left;
    }
    return root;
};
