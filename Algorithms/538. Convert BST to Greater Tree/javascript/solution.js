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
    while (node) {
        if (!node.right) {
            total += node.val;
            node.val = total;
            node = node.left;
        } else {
            const succ = getSuccessor(node);
            if (succ.left) {
                succ.left = null;
                total += node.val;
                node.val = total;
                node = node.left;
            } else {
                succ.left = node;
                node = node.right;
            }
        }
    }

    return root;
};

const getSuccessor = (node) => {
    let succ = node.right;
    while (succ.left && succ.left !== node) {
        succ = succ.left;
    }
    return succ;
};
