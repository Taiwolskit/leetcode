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
        predecessor = null,
        pred = null;

    while (root) {
        if (root.left) {
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                predecessor.right = root;
                root = root.left;
            } else {
                if (pred && pred.val > root.val) {
                    y = root;
                    if (x === null) {
                        x = pred;
                    }
                }

                pred = root;
                predecessor.right = null;
                root = root.right;
            }
        } else {
            if (pred && pred.val > root.val) {
                y = root;
                if (x === null) {
                    x = pred;
                }
            }

            pred = root;
            root = root.right;
        }
    }

    [x.val, y.val] = [y.val, x.val];
};
