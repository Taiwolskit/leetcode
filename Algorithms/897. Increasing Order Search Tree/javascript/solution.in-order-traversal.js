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
    const vals = [];
    inorder(root, vals);
    const ans = new TreeNode();
    let cur = ans;
    for (const v of vals) {
        cur.right = new TreeNode(v);
        cur = cur.right;
    }
    return ans.right;
};

const inorder = (node, vals) => {
    if (node === null) return;
    inorder(node.left, vals);
    vals.push(node.val);
    inorder(node.right, vals);
};
