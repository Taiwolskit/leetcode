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
 */
var BSTIterator = function(root) {
    this.nodesSorted = [];
    this.index = -1;
    this.inorder(root);
};

BSTIterator.prototype.inorder = function (root) {
    if (!root) return;
    this.inorder(root.left);
    this.nodesSorted.push(root.val);
    this.inorder(root.right);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index++;
    return this.nodesSorted[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index < this.nodesSorted.length - 1;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
