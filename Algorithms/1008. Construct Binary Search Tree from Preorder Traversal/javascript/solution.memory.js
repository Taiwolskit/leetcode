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
var bstFromPreorder = function (preorder) {
    let index = 0;

    let helper = (limit) => {
        if (index > preorder.length - 1) return null;
        if (preorder[index] > limit) return null;
        let node = new TreeNode(preorder[index], null, null);
        index++;
        node.left = helper(node.val);
        node.right = helper(limit);
        return node;
    };

    return helper(Infinity);
};
