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
    const stack = [];
    if (root) stack.push([1, root]);

    let depth = 0;
    while (stack.length) {
        let [ currentDepth, subRoot ] = stack.pop();
        if (subRoot) {
            depth = Math.max(depth, currentDepth);
            stack.push([currentDepth + 1, subRoot.left]);
            stack.push([currentDepth + 1, subRoot.right]);
        }
    }

    return depth;
};
