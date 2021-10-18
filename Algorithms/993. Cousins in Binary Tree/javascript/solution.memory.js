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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let properties = {};
    const dfs = (node, level, parent) => {
        if (node === null) return;
        if (node.val === x || node.val === y)
            properties[node.val] = { level, parent };
        if (Object.keys(properties).length < 2)
            dfs(node.left, level + 1, node.val);
        if (Object.keys(properties).length < 2)
            dfs(node.right, level + 1, node.val);
    };
    dfs(root, 1, -1);
    return !(
        properties[x].level !== properties[y].level ||
        properties[x].parent === properties[y].parent
    );
};
