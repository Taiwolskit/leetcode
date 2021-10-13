/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder.shift());
    let currVal = preorder.shift();

    while (currVal) {
        addToTree(root, currVal);
        currVal = preorder.shift();
    }

    return root;
};

function addToTree(node, val) {
    if (val < node.val) {
        if (!node.left) {
            node.left = new TreeNode(val);
        } else {
            addToTree(node.left, val);
        }
    } else {
        if (!node.right) {
            node.right = new TreeNode(val);
        } else {
            addToTree(node.right, val);
        }
    }
}
