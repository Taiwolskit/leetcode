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
    const queue = [];
    queue.push(root);

    while (queue.length) {
        if (
            queue.filter((node) => x === node.val).length &&
            queue.filter((node) => y === node.val).length
        ) {
            return true;
        }
        const L = queue.length;
        for (let i = 0; i < L; i++) {
            const node = queue.shift();
            if (node.left && node.right) {
                if (
                    (node.left.val === x && node.right.val === y) ||
                    (node.right.val === x && node.left.val === y)
                ) {
                    return false;
                }
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return false;
};
