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
var increasingBST = function (root) {
    const ans = new TreeNode();
    let cur = ans;

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);
        node.left = null;
        cur.right = node;
        cur = cur.right;
        inorder(node.right);
    };

    inorder(root);
    return ans.right;
};
