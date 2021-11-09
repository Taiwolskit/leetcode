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
var sumNumbers = function (root) {
    let rootLeaf = 0, currNumber = 0;

    while (root) {
        if (root.left) {
            let predecessor = root.left;
            let steps = 1;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
                steps += 1;
            }

            if (!predecessor.right) {
                currNumber = currNumber * 10 + root.val;
                predecessor.right = root;
                root = root.left;
            } else {
                if (!predecessor.left) {
                    rootLeaf += currNumber;
                }
                for (let i = 0; i < steps; i++) {
                    currNumber %= 10;
                }
                predecessor.right = null;
                root = root.right;
            }
        } else {
            currNumber = currNumber * 10 + root.val;
            if (!root.right) {
                rootLeaf += currNumber;
            }
            root = root.right;
        }
    }

    return rootLeaf;
};
