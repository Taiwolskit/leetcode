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
    const inorder = (r) => {
        return r ? [...inorder(r.left), r.val, ...inorder(r.right)] : [];
    };

    const findTwoSwapped = (nums) => {
        const n = nums.length;
        let x = null,
            y = null;
        for (let i = 0; i < n; i++) {
            if (nums[i] > nums[i + 1]) {
                y = nums[i + 1];
                if (x === null) {
                    x = nums[i];
                } else {
                    break;
                }
            }
        }
        return [x, y];
    };

    const [xVal, yVal] = findTwoSwapped(inorder(root));
    const recover = (r, count) => {
        if (r) {
            if (r.val === xVal || r.val === yVal) {
                r.val = r.val === xVal ? yVal : xVal;
                count--;

                if (count === 0) {
                    return;
                }
            }

            recover(r.left, count);
            recover(r.right, count);
        }
    };

    recover(root, 2);
};
